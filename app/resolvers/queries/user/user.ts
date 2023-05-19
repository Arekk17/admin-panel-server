import type { UserResolver } from './user.types';

const user: UserResolver = async (_, { id }, { prisma }) => {
  const userRecord = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      name: true,
      surname: true,
      phoneNumber: true,
      phonePrefix: true,
      role: true,
      password: false,
    },
  });
  return userRecord;
};

export default user;
