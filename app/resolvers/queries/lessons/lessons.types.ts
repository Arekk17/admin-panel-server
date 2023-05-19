import { Context, Lesson } from '../../../../types';

type LessonsArguments = Omit<Lesson, 'id'>;
export type LessonsResolver = (
  parent: any,
  args: LessonsArguments,
  context: Context
) => Promise<Array<Partial<Lesson> | unknown>>;