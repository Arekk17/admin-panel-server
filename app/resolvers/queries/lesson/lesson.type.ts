import { Context, Lesson } from '../../../../types';

type LessonArguments = Pick<Lesson, 'id'>;
export type LessonResolver = (
  parent: any,
  args: LessonArguments,
  context: Context
) => Promise<Partial<Lesson> | unknown>;
