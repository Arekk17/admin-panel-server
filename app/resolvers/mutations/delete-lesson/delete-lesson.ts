import type { DeleteLessonResolver } from './delete-lesson.types'

const deleteLesson: DeleteLessonResolver = async (_, args, { prisma }) => {
  const { id } = args;
  const deletedLesson = await prisma.lesson.delete({
    where: { id },
  });
  return deletedLesson
};

export default deleteLesson