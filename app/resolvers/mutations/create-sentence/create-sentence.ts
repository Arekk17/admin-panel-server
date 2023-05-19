import type { CreateSentenceResolver } from './create-sentence.types';

const createSentence: CreateSentenceResolver = async (_, args, { prisma }) => {
  const { original, foreign, pronunciation, audioUrl, languageId, lessonId } =
    args;
  const dataToCreate: any = {
    original,
    foreign,
    pronunciation,
    audioUrl,
  };
  if (languageId) {
    dataToCreate.language = {
      connect: {
        id: languageId,
      },
    };
  }
  if (lessonId) {
    dataToCreate.lesson = {
      connect: {
        id: lessonId,
      },
    };
  }

  return prisma.sentence.create({
    data: dataToCreate,
  });
};

export default createSentence;
