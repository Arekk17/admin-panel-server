import type { WordsResolver } from './words.types';

const words: WordsResolver = async (_, __, { prisma }) =>
  prisma.word.findMany({
    include: { language: true },
  });

export default words;
