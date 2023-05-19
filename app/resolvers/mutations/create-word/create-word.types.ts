import { Context, Word } from '../../../../types';

type CreateWordResolverArguments = Omit<Word, 'id'> & {
  languageId?: number;
  lessonId?: number;
};
export type CreateWordResolver = (
  parent: any,
  args: CreateWordResolverArguments,
  context: Context
) => Promise<Partial<Word> | unknown>;
