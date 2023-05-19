import { Context, Order } from '../../../../types';

type OrderArguments = Pick<Order, 'id'>;
export type OrderResolver = (
  parent: any,
  args: OrderArguments,
  context: Context
) => Promise<Partial<Order> | unknown>;
