import { Context, Sentence } from '../../../../types';

type DeleteSentenceArguments = Pick<Sentence, 'id'>;
export type DeleteSentenceResolver = (
  parent: any,
  args: DeleteSentenceArguments,
  context: Context
) => Promise<Sentence | unknown>;
