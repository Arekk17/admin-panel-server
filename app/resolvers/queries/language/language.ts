import type { LanguageResolver } from './language.types';

const language: LanguageResolver = async (_, { id }, { prisma }) =>
  prisma.language.findUnique({
    where: {
      id,
    },
  });

export default language;
