import { Context, Lesson } from '../../../../types';

type CreateLessonResolverArguments = Omit<Lesson, 'id'> & {
  languageId: number;
  courseId: number;
  sentenceIds: number[];
  wordIds: number[];
};
export type CreateLessonResolver = (
  parent: any,
  args: CreateLessonResolverArguments,
  context: Context
) => Promise<Partial<Lesson> | unknown>;
