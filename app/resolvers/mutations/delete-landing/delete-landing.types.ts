import { Context, Landing } from '../../../../types';

type DeleteLandingArguments = {
  id: Landing['id'];
};
export type DeleteLandingResolver = (
  parent: any,
  args: DeleteLandingArguments,
  context: Context
) => Promise<Partial<Landing>>;
