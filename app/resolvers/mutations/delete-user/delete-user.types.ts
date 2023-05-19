import { Context, User } from '../../../../types';

type DeleteUserArguments = {
  id: User['id'];
};
export type DeleteUserResolver = (
  parent: any,
  args: DeleteUserArguments,
  context: Context
) => Promise<Partial<User>>;
