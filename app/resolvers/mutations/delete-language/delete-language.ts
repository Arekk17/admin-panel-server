import type { DeleteLanguageResolver } from './delete-language.types';

const deleteLanguage: DeleteLanguageResolver = async (_, { id }, { prisma }) =>
  prisma.language.delete({
    where: { id },
  });

export default deleteLanguage;
