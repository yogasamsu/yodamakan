'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/game.module.css';
import { GameState } from '@/types/game';
import { LEVELS, FINAL_REWARD, GAMES } from '@/lib/gameConfig';
import { generateQuestion, Question } from '@/lib/mathGenerator';
import { useRouter } from 'next/navigation';

interface GameContainerProps {
    gameId: string;
}

export default function GameContainer({ gameId }: GameContainerProps) {
    const router = useRouter();
    const selectedGame = GAMES.find(g => g.id === gameId);

    // If gameId is invalid, we will trust the parent component (page.tsx) to handle 404 or redirect,
    // but typescript needs assurance.
    const currentLevels = selectedGame ? selectedGame.levels : LEVELS;

    const [gameState, setGameState] = useState<GameState>('START');
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(30); // Initialize to 30s directly
    const [collectedIngredients, setCollectedIngredients] = useState<string[]>([]);

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const currentLevelConfig = currentLevels[currentLevelIndex];

    // Reset state when gameId changes (though usually page unmounts/remounts)
    useEffect(() => {
        if (!selectedGame) {
            router.push('/');
            return;
        }
        // Initialize timer based on first level duration just in case
        setTimeLeft(selectedGame.levels[0].duration);
    }, [selectedGame, router]);


    // Start Game
    const startGame = () => {
        if (!selectedGame) return;
        setGameState('PLAYING');
        setCurrentLevelIndex(0);
        setCollectedIngredients([]);
        startLevel(0);
    };

    // Start Level
    const startLevel = (index: number) => {
        if (!selectedGame) return;

        if (index >= selectedGame.levels.length) {
            setGameState('WON');
            return;
        }
        const level = selectedGame.levels[index];
        setCurrentLevelIndex(index);
        setTimeLeft(level.duration);
        // Pass the operation type to generateQuestion
        setCurrentQuestion(generateQuestion(level.difficulty, selectedGame.operation));
        setUserAnswer('');

        // Clear existing timer if any
        if (timerRef.current) clearInterval(timerRef.current);

        // Start Timer
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    handleGameOver();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleGameOver = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setGameState('GAME_OVER');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentQuestion) return;

        if (parseInt(userAnswer) === currentQuestion.answer) {
            // Correct!
            const ingredient = currentLevelConfig.reward;
            setCollectedIngredients([...collectedIngredients, ingredient.name]);

            // Stop timer temporarily
            if (timerRef.current) clearInterval(timerRef.current);

            // Brief delay to show success
            setTimeout(() => {
                const nextIndex = currentLevelIndex + 1;
                if (nextIndex < currentLevels.length) {
                    startLevel(nextIndex);
                } else {
                    setGameState('WON');
                }
            }, 500);

        } else {
            handleGameOver();
        }
    };

    const returnToMenu = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        router.push('/');
    }

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    // Calculate Yoda's Position: 
    // Percentage based on Total Levels. 
    // Start: 5%. Each level adds approx 12% space.
    const yodaPosition = 5 + (currentLevelIndex * (85 / currentLevels.length));


    if (!selectedGame) return null; // Should ideally show loading or redirect

    return (
        <div className={styles.container}>
            {/* HUD */}
            <div className={styles.hud}>
                <button
                    onClick={returnToMenu}
                    style={{
                        marginRight: 'auto',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                    title="Back to Menu"
                >
                    🏠
                </button>
                <div className={styles.timer}>🕒 {timeLeft}s</div>
                <div className={styles.ingredientBar}>
                    {currentLevels.map((lvl, idx) => (
                        <div
                            key={lvl.level}
                            className={`${styles.ingredientSlot} ${idx < collectedIngredients.length ? styles.collected : ''}`}
                            title={lvl.reward.name}
                        >
                            {/* Show Icon if collected */}
                            {idx < collectedIngredients.length ? lvl.reward.image : ''}
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Milestones */}
            <div className={styles.milestoneContainer}>
                {currentLevels.map((lvl, idx) => {
                    // Position milestones evenly across the track
                    const leftPos = 5 + ((idx + 1) * (85 / currentLevels.length));
                    return (
                        <div key={idx} className={styles.milestone} style={{ left: `${leftPos}%` }}>
                            <div className={styles.milestoneIcon}>
                                {lvl.reward.image}
                            </div>
                            <div className={styles.milestoneLabel}>{lvl.reward.name}</div>
                        </div>
                    );
                })}
            </div>

            {/* Screen Content */}
            {gameState === 'START' && (
                <div className={styles.questionBox}>
                    <h1 className={styles.questionText} style={{ fontSize: '3rem' }}>Start Cooking!</h1>
                    <h2 style={{ fontSize: '2rem', color: '#555' }}>{selectedGame.name}</h2>
                    <p style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333333', fontWeight: 'bold' }}>
                        Test kemampuan matematikamu untuk membantu Chef Yoda memasak {selectedGame.finalReward.name}
                    </p>
                    <button className={styles.restartBtn} onClick={startGame}>Start Game ▶</button>
                    {/* Return to Menu button removed from start screen as HUD has home button or browser back */}
                </div>
            )}

            {gameState === 'PLAYING' && currentQuestion && (
                <>
                    <div className={styles.questionBox}>
                        <div className={styles.questionText}>
                            {currentQuestion.text} = ?
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                className={styles.inputInput}
                                type="number"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                autoFocus
                                placeholder="?"
                            />
                            <button type="submit" style={{ display: 'none' }}>Submit</button>
                        </form>
                    </div>

                    {/* Yoda Character Visualization */}
                    <div
                        className={styles.yodaContainer}
                        style={{ left: `${yodaPosition}%` }}
                    >
                        <div className={styles.chefHat}>👨‍🍳</div>
                        <div className={styles.yodaFace}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/yoda_face.png" alt="Yoda Face" />
                        </div>
                        <div className={styles.chefBody}>
                            <div className={styles.chefApron}></div>
                        </div>
                    </div>
                </>
            )}

            {gameState === 'GAME_OVER' && (
                <div className={styles.gameOver}>
                    <h1>Game Over!</h1>
                    <p style={{ fontSize: '2rem' }}>Yoda is still hungry...</p>
                    <button className={styles.restartBtn} onClick={startGame}>Try Again ↺</button>
                    <button className={styles.restartBtn} onClick={returnToMenu} style={{ background: '#555', marginTop: '10px' }}>Menu 🏠</button>
                </div>
            )}

            {gameState === 'WON' && (
                <div className={styles.winScreen}>
                    <h1>Yummy!</h1>
                    <div style={{ fontSize: '5rem', margin: '20px' }}>
                        {selectedGame.finalReward.image}
                    </div>
                    <h2>{selectedGame.finalReward.name} is ready!</h2>
                    <button className={styles.restartBtn} onClick={startGame}>Play Again ↺</button>
                    <button className={styles.restartBtn} onClick={returnToMenu} style={{ background: '#555', marginTop: '10px' }}>Menu 🏠</button>
                </div>
            )}

            {/* Floor */}
            <div className={styles.floor}></div>
        </div>
    );
}
