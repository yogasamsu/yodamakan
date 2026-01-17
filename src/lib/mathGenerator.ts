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
            // Mixed: either larger 2 operands or 3 operands
            if (Math.random() > 0.5) {
                // 3 operands, sum < 30
                a = Math.floor(Math.random() * 10) + 1;
                b = Math.floor(Math.random() * 10) + 1;
                c = Math.floor(Math.random() * 10) + 1;
                return {
                    text: `${a} + ${b} + ${c}`,
                    answer: a + b + c
                };
            } else {
                // 2 operands, sum < 60
                a = Math.floor(Math.random() * 30) + 10;
                b = Math.floor(Math.random() * 30) + 10;
                return {
                    text: `${a} + ${b}`,
                    answer: a + b
                };
            }

        default:
            return { text: '1 + 1', answer: 2 };
    }
}
