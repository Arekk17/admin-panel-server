import { Context, Landing } from '../../../../types';

type CreateLandingArguments = Omit<Landing, 'id'>;
export type CreateLandingResolver = (
  parent: any,
  args: CreateLandingArguments,
  context: Context
) => Promise<Partial<Landing> | unknown>;
