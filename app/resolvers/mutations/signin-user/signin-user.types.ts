import type { Context, AuthPayload, User } from '../../../../types';

type SigninUserArguments = {
  password: User['password'];
  email: User['email'];
};
export type SigninUserResolver = (
  parent: any,
  args: SigninUserArguments,
  context: Context
) => Promise<AuthPayload>;
