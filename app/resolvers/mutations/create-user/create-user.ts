import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { CreateUserResolver } from './create-user.types';
import getConfig from '../../../utils/get-config';

const createUser: CreateUserResolver = async (_, args, { prisma }) => {
  const { email, name, surname, phoneNumber, phonePrefix, role, password } =
    args;
  const existUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (existUser) {
    // TODO add better error message
    return null;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      surname,
      phoneNumber,
      phonePrefix,
      password: hashedPassword,
      role,
    },
  });
  const token = jwt.sign({ userId: user.id }, getConfig()?.APP_JWT_SECRET!);
  user.password = '';
  return {
    token,
    user,
  };
};

export default createUser;
