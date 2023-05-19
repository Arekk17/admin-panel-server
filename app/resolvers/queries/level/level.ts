import type { LevelResolver } from './level.types';

const level: LevelResolver = async (_, { id }, { prisma }) =>
  prisma.level.findUnique({
    where: {
      id,
    },
  });

export default level;
