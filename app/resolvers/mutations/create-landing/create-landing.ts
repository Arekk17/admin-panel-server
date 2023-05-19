import type { CreateLandingResolver } from './create-landing.types';

const createLanding: CreateLandingResolver = async (_, args, { prisma }) => {
  const { title, name, slug, content } = args;
  const existLanding = await prisma.landing.findUnique({
    where: {
      slug,
    },
  });
  if (existLanding) {
    // TODO add better error message
    return null;
  }
  const landing = await prisma.landing.create({
    data: { title, name, slug, content },
  });
  return landing;
};

export default createLanding;
