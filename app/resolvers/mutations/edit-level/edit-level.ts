import type { EditLevelResolver } from './edit-level.types';

const editLevel: EditLevelResolver = async (_, args, { prisma }) => {
  const { id } = args;
  const data: Record<string, any> = {};
  for (const [key, value] of Object.entries(args)) {
    const excludedPropertiesCondition = key !== 'id';

    if (excludedPropertiesCondition && value !== undefined) {
      data[key] = value;
    }
  }

  const updatedLevel = await prisma.level.update({
    where: { id },
    data,
  });

  return updatedLevel;
};

export default editLevel;
