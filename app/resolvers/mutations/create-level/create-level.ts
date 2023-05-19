import type { CreateLevelResolver } from './create-level.types';

const createLevel: CreateLevelResolver = async (_, args, { prisma }) => {
  const { name, description, imageUrl } = args;
  return prisma.level.create({
    data: {
      name,
      description,
      imageUrl,
    },
  });
};

export default createLevel;
