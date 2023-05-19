import bcrypt from 'bcryptjs';
import type { EditUserResolver } from './edit-user.types';

const updatePassword = async (password: string): Promise<string> =>
  bcrypt.hash(password, 10);

const editUser: EditUserResolver = async (_, args, { prisma }) => {
  const { id } = args;

  const data: Record<string, any> = {};
  for (const [key, value] of Object.entries(args)) {
    const excludedPropertiesCondition = key !== 'id' && key !== 'role';

    if (excludedPropertiesCondition && value !== undefined) {
      data[key] = value;
    }
  }

  if (args.password) {
    data.password = await updatePassword(args.password);
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data,
  });

  return updatedUser;
};

export default editUser;
