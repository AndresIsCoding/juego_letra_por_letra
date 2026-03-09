import { Difficulty, WordData } from '../types/game';
import { wordsData } from '../data/words';

export const getRandomWord = (difficulty: Difficulty): WordData => {
  const words = wordsData[difficulty];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};
