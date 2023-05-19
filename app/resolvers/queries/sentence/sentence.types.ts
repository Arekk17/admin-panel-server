import { Context, Sentence } from '../../../../types';

type SentenceArguments = Pick<Sentence, 'id'>;
export type SentenceResolver = (
  parent: any,
  args: SentenceArguments,
  context: Context
) => Promise<Partial<Sentence> | unknown>;