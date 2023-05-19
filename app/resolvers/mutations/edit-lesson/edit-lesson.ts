import type { EditLessonResolver } from './edit-lesson.types';

const editLesson: EditLessonResolver = async (_, args, { prisma }) => {
  const { id, name, languageId, courseId, sentenceIds, wordIds } = args
  const data: Record<string, any> = {};
  for (const [key, value] of Object.entries({
    id,
    name,
    languageId,
    courseId,
  })) {
    if (value !== undefined) {
      data[key] = value;
    }
  }

  const updatedLesson = await prisma.lesson.update({
    where: { id },
    data: {
      ...data,
      sentences: {
        connect: sentenceIds?.map((id: number) => ({ id })),
      },
      words: {
        connect: wordIds?.map((id: number) => ({ id })),
      }
    },
  });

  return updatedLesson;
};

export default editLesson;
