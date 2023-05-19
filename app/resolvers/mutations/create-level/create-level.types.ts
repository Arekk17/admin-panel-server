import { Context, Level } from '../../../../types';

type CreateLevelResolverArguments = Omit<Level, 'id'>;
export type CreateLevelResolver = (
  parent: any,
  args: CreateLevelResolverArguments,
  context: Context
) => Promise<Partial<Level> | unknown>;
