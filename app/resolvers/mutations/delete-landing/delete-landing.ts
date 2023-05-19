import type { DeleteLandingResolver } from './delete-landing.types';

const deleteLanding: DeleteLandingResolver = async (_, args, { prisma }) => {
  const { id } = args;
  const deletedLanding = await prisma.landing.delete({
    where: { id },
  });
  return deletedLanding;
};

export default deleteLanding;
