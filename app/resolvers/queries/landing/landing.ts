import type { LandingResolver } from './landing.types';

const landing: LandingResolver = async (_, { id }, { prisma }) =>
  prisma.landing.findUnique({
    where: {
      id,
    },
  });

export default landing;
