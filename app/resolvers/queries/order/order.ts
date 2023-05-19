import type { OrderResolver } from './order.types';

const order: OrderResolver = async (_, { id }, { prisma }) =>
  prisma.order.findUnique({
    where: {
      id,
    },
    include: { user: true, course: true },
  });

export default order;
