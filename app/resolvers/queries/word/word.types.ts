import { Context, Word } from '../../../../types';

type WordArguments = Pick<Word, 'id'>;
export type WordResolver = (
  parent: any,
  args: WordArguments,
  context: Context
) => Promise<Partial<Word> | unknown>;
