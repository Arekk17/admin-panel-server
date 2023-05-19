import type { LessonResolver } from './lesson.type';

const lesson: LessonResolver = async (_, { id }, { prisma }) =>
  prisma.lesson.findUnique({
    where: {
      id,
    },
    include: {
      words: true,
      sentences: true,
    },
  });
export default lesson;
