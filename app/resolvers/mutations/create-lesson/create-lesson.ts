import type { CreateLessonResolver } from './create-lesson.types';

const createLesson: CreateLessonResolver = async (_, args, { prisma }) => {
  const { name, languageId, courseId, sentenceIds, wordIds } = args;
  const dataToCreate: any = {
    name,
  };
  if (sentenceIds) {
    dataToCreate.sentences = {
      connect: sentenceIds.map((id: number) => ({ id })),
    }
  }
  if (wordIds){
    dataToCreate.words = {
      connect: wordIds.map((id: number) => ({ id })),
    }
  }
  if (languageId) {
    dataToCreate.language = {
      connect: {
        id: languageId
      }
    }
  }
  if (courseId) {
    dataToCreate.course = {
      connect: {
        id: courseId
      }
    }
  }

  return prisma.lesson.create({
    data: dataToCreate,
  });
};

export default createLesson;
