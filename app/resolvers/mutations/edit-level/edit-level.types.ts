import { Context, Level } from '../../../../types';

type EditLevelArguments = Omit<Level, 'courses'>;

export type EditLevelResolver = (
  parent: any,
  args: EditLevelArguments,
  context: Context
) => Promise<Level | unknown>;
