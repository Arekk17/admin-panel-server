import type { SentenceResolver } from './sentence.types';

const sentence: SentenceResolver = async (_, { id }, { prisma }) =>
  prisma.sentence.findUnique({
    where: {
      id,
    },
    include: { language: true },
  });

export default sentence;
