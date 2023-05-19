import type { DeleteSentenceResolver } from './delete-sentence.types';

const deleteSentence: DeleteSentenceResolver = async (_, args, { prisma }) => {
  const { id } = args;
  const sentenceDelete = await prisma.sentence.delete({
    where: { id },
  });
  return sentenceDelete;
};

export default deleteSentence;
