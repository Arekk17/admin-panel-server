import { Context, Level } from '../../../../types';

type LevelArguments = Pick<Level, 'id'>;
export type LevelResolver = (
  parent: any,
  args: LevelArguments,
  context: Context
) => Promise<Partial<Level> | unknown>;
