import type { CreateLanguageResolver } from './create-language.types';

const createLanguage: CreateLanguageResolver = async (
  _,
  { name, logo },
  { prisma }
) =>
  prisma.language.create({
    data: {
      name,
      logo,
    },
  });

export default createLanguage;
