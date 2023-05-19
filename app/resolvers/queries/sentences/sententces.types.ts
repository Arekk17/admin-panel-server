import { Context, Sentence } from '../../../../types';

type SentencesArguments = Omit<Sentence, 'id'>;
export type SentencesResolver = (
  parent: any,
  args: SentencesArguments,
  context: Context
) => Promise<Array<Partial<Sentence> | unknown>>;
