import { Context, Landing } from '../../../../types';

type LandingArguments = Pick<Landing, 'id'>;
export type LandingResolver = (
  parent: any,
  args: LandingArguments,
  context: Context
) => Promise<Partial<Landing> | unknown>;
