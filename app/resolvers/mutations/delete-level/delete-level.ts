import type { DeleteLevelResolver } from './delete-level.types';

const deleteLevel: DeleteLevelResolver = async (_, args, { prisma }) => {
  const { id } = args;
  const deletedLevel = await prisma.level.delete({
    where: { id },
  });
  return deletedLevel;
};

export default deleteLevel;
