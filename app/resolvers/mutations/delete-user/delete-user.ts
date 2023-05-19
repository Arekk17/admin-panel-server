import type { DeleteUserResolver } from './delete-user.types';

const deleteUser: DeleteUserResolver = async (_, args, { prisma }) => {
  const { id } = args;
  console.log('@@@id', id);
  const deletedUser = await prisma.user.delete({
    where: { id },
  });
  console.log('@@kasowany', deleteUser);
  // @ts-expect-error
  delete deletedUser.password;
  return deletedUser;
};

export default deleteUser;
