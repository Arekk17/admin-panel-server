import { Context, User } from '../../../../types';

type EditUserArguments = Omit<User, 'role'>;
export type EditUserResolver = (
  parent: any,
  args: EditUserArguments,
  context: Context
) => Promise<Partial<User>>;
