import { Context, AuthPayload, User } from '../../../../types';

type CreateUserResolverArguments = Omit<User, 'id'>;
export type CreateUserResolver = (
  parent: any,
  args: CreateUserResolverArguments,
  context: Context
) => Promise<AuthPayload | unknown>;
