import { Context, Sentence } from '../../../../types';

type EditSentenceArguments = Sentence & {
  languageId?: number;
};

export type EditSentenceResolver = (
  parent: any,
  args: EditSentenceArguments,
  context: Context
) => Promise<Sentence | unknown>;
