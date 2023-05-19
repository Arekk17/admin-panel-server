import { PrismaClient } from '@prisma/client';
import users from './users';
import words from './words';
import landings from './landings';
import levels from './levels';

const seeds = async () => {
  const prisma = new PrismaClient();
  const data = [users, words, landings, levels].map(async (fun: any) => {
    const operation = await fun();
    // @ts-ignore
    await prisma[operation.name].deleteMany();
  });
  await Promise.all(data);
};

seeds();
