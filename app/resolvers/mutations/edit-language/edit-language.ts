import type { EditLanguageResolver } from './edit-language.types';

const editLanguage: EditLanguageResolver = async (_, args, { prisma }) => {
  const { id } = args;

  // TODO validate incoming content in terms of allowed html tags

  const data: Record<string, any> = {};
  for (const [key, value] of Object.entries(args)) {
    const excludedPropertiesCondition = key !== 'id';

    if (excludedPropertiesCondition && value !== undefined) {
      data[key] = value;
    }
  }

  return prisma.language.update({
    where: { id },
    data,
  });
};

export default editLanguage;
