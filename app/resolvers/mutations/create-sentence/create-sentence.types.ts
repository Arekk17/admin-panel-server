import { Context, Sentence } from '../../../../types';

type CreateSentenceResolverArguments = Omit<Sentence, 'id'> & {
  languageId?: number;
  lessonId?: number;
};
export type CreateSentenceResolver = (
  parent: any,
  args: CreateSentenceResolverArguments,
  context: Context
) => Promise<Partial<Sentence> | unknown>;
