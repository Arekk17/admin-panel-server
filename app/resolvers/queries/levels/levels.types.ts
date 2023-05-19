import { Context, Level } from '../../../../types';

type LevelsArguments = Omit<Level, 'id'>;
export type LevelsResolver = (
  parent: any,
  args: LevelsArguments,
  context: Context
) => Promise<Array<Partial<Level> | unknown>>;
