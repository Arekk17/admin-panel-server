import { Context, Word } from '../../../../types';

type DeleteWordArguments = Pick<Word, 'id'>;
export type DeleteWordResolver = (
  parent: any,
  args: DeleteWordArguments,
  context: Context
) => Promise<Word | unknown>;
