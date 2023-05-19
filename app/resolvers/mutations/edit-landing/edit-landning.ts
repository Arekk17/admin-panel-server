import type { EditLandingResolver } from './edit-landing.types';

// TODO sanitize content property html tags etc

const editLanding: EditLandingResolver = async (_, args, { prisma }) => {
  const { id } = args;

  // TODO validate incoming content in terms of allowed html tags

  const data: Record<string, any> = {};
  for (const [key, value] of Object.entries(args)) {
    const excludedPropertiesCondition = key !== 'id';

    if (excludedPropertiesCondition && value !== undefined) {
      data[key] = value;
    }
  }

  const updatedLanding = await prisma.landing.update({
    where: { id },
    data,
  });

  return updatedLanding;
};

export default editLanding;
