import { Context, Lesson } from '../../../../types';

type EditLessonArguments = Lesson & {
  languageId?: number;
  courseId?: number;
  sentenceIds?: number[];
  wordIds?: number[];
};

export type EditLessonResolver = (
  parent: any,
  args: EditLessonArguments,
  context: Context
) => Promise<Lesson | unknown>;