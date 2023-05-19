import { Context, Landing } from '../../../../types';

export type EditLandingResolver = (
  parent: any,
  args: Landing,
  context: Context
) => Promise<Landing>;
