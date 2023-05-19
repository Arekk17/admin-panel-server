import { Context, User } from '../../../../types';

type UserArguments = Pick<User, 'id'>;
export type UserResolver = (
  parent: any,
  args: UserArguments,
  context: Context
) => Promise<Partial<User> | unknown>;
