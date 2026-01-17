
import { Ingredient, LevelConfig } from '@/types/game';

// Using Emojis as icons since image generation had temporary issues.
// These are clear and universal.
export const INGREDIENTS: Ingredient[] = [
  { id: '1', name: 'Ayam', image: '🍗' },
  { id: '2', name: 'Garam', image: '🧂' },
  { id: '3', name: 'Bawang', image: '🧅' },
  { id: '4', name: 'Bawang Putih', image: '🧄' },
  { id: '5', name: 'Cabai', image: '🌶️' },
  { id: '6', name: 'Kecap', image: '🍶' },
  { id: '7', name: 'Minyak', image: '🥥' }, // Oil alternative
];

export const FINAL_REWARD: Ingredient = {
  id: 'final',
  name: 'Ayam Goreng',
  image: '🍗✨',
};

export const LEVELS: LevelConfig[] = [
  { level: 1, duration: 15, difficulty: 'easy', reward: INGREDIENTS[0] },
  { level: 2, duration: 15, difficulty: 'easy', reward: INGREDIENTS[1] },
  { level: 3, duration: 15, difficulty: 'medium', reward: INGREDIENTS[2] },
  { level: 4, duration: 15, difficulty: 'medium', reward: INGREDIENTS[3] },
  { level: 5, duration: 15, difficulty: 'hard', reward: INGREDIENTS[4] },
  { level: 6, duration: 15, difficulty: 'hard', reward: INGREDIENTS[5] },
  { level: 7, duration: 15, difficulty: 'hard', reward: INGREDIENTS[6] },
];
