import type { LevelsResolver } from './levels.types';

const levels: LevelsResolver = async (_, __, { prisma }) =>
  prisma.level.findMany();

export default levels;
