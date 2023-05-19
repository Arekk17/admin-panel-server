import { Context, Word } from '../../../../types';

type EditWordArguments = Word & {
  languageId?: number;
};

export type EditWordResolver = (
  parent: any,
  args: EditWordArguments,
  context: Context
) => Promise<Word | unknown>;
