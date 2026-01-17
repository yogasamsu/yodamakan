export interface Ingredient {
    id: string;
    name: string;
    image: string;
}

export interface LevelConfig {
    level: number;
    duration: number; // seconds
    difficulty: 'easy' | 'medium' | 'hard';
    reward: Ingredient;
}

export type GameState = 'START' | 'PLAYING' | 'WON' | 'GAME_OVER';
