import type { EditWordResolver } from './edit-word.types';

const editWord: EditWordResolver = async (_, args, { prisma }) => {
  const { id } = args;

  const data: Record<string, any> = {};
  for (const [key, value] of Object.entries(args)) {
    const excludedPropertiesCondition = key !== 'id';

    if (excludedPropertiesCondition && value !== undefined) {
      data[key] = value;
    }
  }

  const updatedWord = await prisma.word.update({
    where: { id },
    data,
    include: { language: true },
  });

  return updatedWord;
};

export default editWord;
