import { PrismaClient } from '@prisma/client';
import users from './users';
import words from './words';
import levels from './levels';
import landings from './landings';
import languages from './languages';

const seeds = async () => {
  const prisma = new PrismaClient();
  const data = [levels].map(async (fun: any) => {
    const operation = await fun();
    // @ts-ignore
    await prisma[operation.name].createMany({
      data: operation.data,
    });
  });
  await Promise.all(data);
};

seeds();
