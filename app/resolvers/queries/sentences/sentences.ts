import type { SentencesResolver } from './sententces.types';

const sentences: SentencesResolver = async (_, __, { prisma }) =>
  prisma.sentence.findMany({
    include: { language: true },
  });

export default sentences;
