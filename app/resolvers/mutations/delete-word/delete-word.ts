import type { DeleteWordResolver } from './delete-word.types';

const deleteWord: DeleteWordResolver = async (_, args, { prisma }) => {
  const { id } = args;
  const deletedWord = await prisma.word.delete({
    where: { id },
  });
  return deletedWord;
};

export default deleteWord;
