
import { Ingredient, LevelConfig } from '@/types/game';

// Using Emojis as icons since image generation had temporary issues.
// These are clear and universal.
// Ayam Goreng Ingredients
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

// Takoyaki Ingredients (Emojis)
export const TAKOYAKI_INGREDIENTS: Ingredient[] = [
  { id: 't1', name: 'Tepung', image: '🥡' },
  { id: 't2', name: 'Telur', image: '🥚' },
  { id: 't3', name: 'Air', image: '💧' },
  { id: 't4', name: 'Gurita', image: '🐙' },
  { id: 't5', name: 'Daun Bawang', image: '🌿' },
  { id: 't6', name: 'Saus Takoyaki', image: '🏺' },
  { id: 't7', name: 'Katsuobushi', image: '🐟' },
];

export const TAKOYAKI_FINAL_REWARD: Ingredient = {
  id: 'final_takoyaki',
  name: 'Takoyaki',
  image: '🐙✨',
};

export const TAKOYAKI_LEVELS: LevelConfig[] = [
  { level: 1, duration: 15, difficulty: 'easy', reward: TAKOYAKI_INGREDIENTS[0] },
  { level: 2, duration: 15, difficulty: 'easy', reward: TAKOYAKI_INGREDIENTS[1] },
  { level: 3, duration: 15, difficulty: 'medium', reward: TAKOYAKI_INGREDIENTS[2] },
  { level: 4, duration: 15, difficulty: 'medium', reward: TAKOYAKI_INGREDIENTS[3] },
  { level: 5, duration: 15, difficulty: 'hard', reward: TAKOYAKI_INGREDIENTS[4] },
  { level: 6, duration: 15, difficulty: 'hard', reward: TAKOYAKI_INGREDIENTS[5] },
  { level: 7, duration: 15, difficulty: 'hard', reward: TAKOYAKI_INGREDIENTS[6] },
];

import { GameTheme } from '@/types/game';

export const GAMES: GameTheme[] = [
  {
    id: 'level1',
    name: 'Level 1: Masak Ayam Goreng',
    description: 'Belajar Penjumlahan',
    operation: 'addition',
    levels: LEVELS,
    finalReward: FINAL_REWARD
  },
  {
    id: 'level2',
    name: 'Level 2: Masak Takoyaki',
    description: 'Belajar Pengurangan',
    operation: 'subtraction',
    levels: TAKOYAKI_LEVELS,
    finalReward: TAKOYAKI_FINAL_REWARD
  }
];
