
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
  { id: '8', name: 'Kunyit', image: '🟡' },
  { id: '9', name: 'Ketumbar', image: '🌿' },
  { id: '10', name: 'Jahe', image: '🫚' },
];

export const FINAL_REWARD: Ingredient = {
  id: 'final',
  name: 'Ayam Goreng',
  image: '🍗✨',
};

export const LEVELS: LevelConfig[] = [
  { level: 1, duration: 15, difficulty: 'easy', reward: INGREDIENTS[0] },
  { level: 2, duration: 15, difficulty: 'easy', reward: INGREDIENTS[1] },
  { level: 3, duration: 15, difficulty: 'easy', reward: INGREDIENTS[2] }, // Added Easy
  { level: 4, duration: 15, difficulty: 'medium', reward: INGREDIENTS[3] },
  { level: 5, duration: 15, difficulty: 'medium', reward: INGREDIENTS[4] },
  { level: 6, duration: 15, difficulty: 'medium', reward: INGREDIENTS[5] }, // Added Medium
  { level: 7, duration: 15, difficulty: 'hard', reward: INGREDIENTS[6] },
  { level: 8, duration: 15, difficulty: 'hard', reward: INGREDIENTS[7] }, // New
  { level: 9, duration: 15, difficulty: 'hard', reward: INGREDIENTS[8] }, // New
  { level: 10, duration: 15, difficulty: 'hard', reward: INGREDIENTS[9] }, // New
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
  { id: 't8', name: 'Mayones', image: '🧴' },
  { id: 't9', name: 'Aonori', image: '🟢' },
  { id: 't10', name: 'Jahe Merah', image: '🔴' },
];

export const TAKOYAKI_FINAL_REWARD: Ingredient = {
  id: 'final_takoyaki',
  name: 'Takoyaki',
  image: '🐙✨',
};

export const TAKOYAKI_LEVELS: LevelConfig[] = [
  { level: 1, duration: 30, difficulty: 'easy', reward: TAKOYAKI_INGREDIENTS[0] },
  { level: 2, duration: 30, difficulty: 'easy', reward: TAKOYAKI_INGREDIENTS[1] },
  { level: 3, duration: 30, difficulty: 'easy', reward: TAKOYAKI_INGREDIENTS[2] }, // Added Easy
  { level: 4, duration: 30, difficulty: 'medium', reward: TAKOYAKI_INGREDIENTS[3] },
  { level: 5, duration: 30, difficulty: 'medium', reward: TAKOYAKI_INGREDIENTS[4] },
  { level: 6, duration: 30, difficulty: 'medium', reward: TAKOYAKI_INGREDIENTS[5] }, // Added Medium
  { level: 7, duration: 30, difficulty: 'hard', reward: TAKOYAKI_INGREDIENTS[6] },
  { level: 8, duration: 30, difficulty: 'hard', reward: TAKOYAKI_INGREDIENTS[7] }, // New
  { level: 9, duration: 30, difficulty: 'hard', reward: TAKOYAKI_INGREDIENTS[8] }, // New
  { level: 10, duration: 30, difficulty: 'hard', reward: TAKOYAKI_INGREDIENTS[9] }, // New
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
