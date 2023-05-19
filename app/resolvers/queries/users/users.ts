import type { UsersResolver } from './users.types';

const users: UsersResolver = async (_, __, { prisma }) => {
  const result = await prisma.user.findMany();
  const usersAccount = result.map(({ password, ...rest }) => ({
    password: '',
    ...rest,
  }));

  return usersAccount;
};

export default users;
