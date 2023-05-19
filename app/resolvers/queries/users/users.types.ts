import { Context, User } from '../../../../types';

type UsersArguments = Omit<User, 'id'>;
export type UsersResolver = (
  parent: any,
  args: UsersArguments,
  context: Context
) => Promise<Array<Partial<User> | unknown>>;
