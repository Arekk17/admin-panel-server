import { Context, Level } from '../../../../types';

type DeleteLevelArguments = Pick<Level, 'id'>;

export type DeleteLevelResolver = (
  parent: any,
  args: DeleteLevelArguments,
  context: Context
) => Promise<Level | unknown>;
