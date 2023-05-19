import type { LessonsResolver } from './lessons.types';

const lessons: LessonsResolver = async (_, __, { prisma }) =>
  prisma.lesson.findMany({
    include: {
      sentences: true,
      words: true,
      language: true,
    }
  });


export default lessons;
