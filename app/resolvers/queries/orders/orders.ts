import type { OrdersResolver } from './orders.types';

const orders: OrdersResolver = async (_, __, { prisma }) =>
  prisma.order.findMany();

export default orders;
