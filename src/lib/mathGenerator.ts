export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
    text: string;
    answer: number;
}

export function generateQuestion(difficulty: Difficulty): Question {
    let a, b, c;

    switch (difficulty) {
        case 'easy':
            // Sum < 20, 2 operands
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            return {
                text: `${a} + ${b}`,
                answer: a + b
            };

        case 'medium':
            // Sum < 40, 2 operands
            a = Math.floor(Math.random() * 20) + 5;
            b = Math.floor(Math.random() * 20) + 5;
            return {
                text: `${a} + ${b}`,
                answer: a + b
            };

        case 'hard':
            // Rule: 1 single digit (1-9) + 2 teen numbers (11-19)
            // Example: 5 + 15 + 12
            const single = Math.floor(Math.random() * 9) + 1; // 1-9
            const teen1 = Math.floor(Math.random() * 9) + 11; // 11-19
            const teen2 = Math.floor(Math.random() * 9) + 11; // 11-19

            // Randomize order for variety
            const nums = [single, teen1, teen2].sort(() => Math.random() - 0.5);

            return {
                text: `${nums[0]} + ${nums[1]} + ${nums[2]}`,
                answer: single + teen1 + teen2
            };

        default:
            return { text: '1 + 1', answer: 2 };
    }
}
