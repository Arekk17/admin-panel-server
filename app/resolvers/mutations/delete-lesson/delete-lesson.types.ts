import { Context, Lesson } from '../../../../types';

type DeleteLessonArguments = Pick<Lesson, 'id'>;
export type DeleteLessonResolver = (
  parent: any,
  args: DeleteLessonArguments,
  context: Context
) => Promise<Lesson | unknown>;
