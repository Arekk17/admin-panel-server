import type { WordResolver } from './word.types';

const word: WordResolver = async (_, { id }, { prisma }) =>
  prisma.word.findUnique({
    where: {
      id,
    },
    include: { language: true },
  });

export default word;
