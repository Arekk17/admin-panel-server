import type { CreateWordResolver } from './create-word.types';
import { WORDGROUP } from '../../../../types';

const createWord: CreateWordResolver = async (
  _,
  args,
  { prisma }: { prisma: any }
) => {
  const {
    original,
    foreign,
    pronunciation,
    audioUrl,
    imageUrl,
    languageId,
    lessonId,
    wordGroup = WORDGROUP.ADJECTIVE,
  } = args;

  const dataToCreate: any = {
    wordGroup,
    original,
    foreign,
    pronunciation,
    audioUrl,
    imageUrl,
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

  return prisma.word.create({
    data: dataToCreate,
  });
};

export default createWord;
