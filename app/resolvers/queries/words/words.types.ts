import { Context, Word } from '../../../../types';

type WordsArguments = Omit<Word, 'id'>;
export type WordsResolver = (
  parent: any,
  args: WordsArguments,
  context: Context
) => Promise<Array<Partial<Word> | unknown>>;
