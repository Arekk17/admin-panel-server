import { Context, Order } from '../../../../types';

type OrdersArguments = Pick<Order, 'id'>;
export type OrdersResolver = (
  parent: any,
  args: OrdersArguments,
  context: Context
) => Promise<Array<Partial<Order> | unknown>>;
