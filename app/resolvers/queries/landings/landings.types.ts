import { Context, Landing } from '../../../../types';

type LandingsArguments = Pick<Landing, 'id'>;
export type LandingsResolver = (
  parent: any,
  args: LandingsArguments,
  context: Context
) => Promise<Array<Partial<Landing> | unknown>>;
