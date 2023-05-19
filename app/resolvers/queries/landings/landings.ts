import type { LandingsResolver } from './landings.types';

const landings: LandingsResolver = async (_, __, { prisma }) =>
  prisma.landing.findMany();

export default landings;
