import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { SigninUserResolver } from './signin-user.types';
import getConfig from '../../../utils/get-config';

const signinUser: SigninUserResolver = async (_, args, { prisma }) => {
  const user = await prisma.user.findUnique({
    where: { email: args.email },
  });
  if (!user) {
    throw new Error('No such user found');
  }
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }
  const token = jwt.sign(
    { userId: user.id, role: user.role, name: user.name },
    getConfig()?.APP_JWT_SECRET!
  );
  user.password = '';
  return {
    token,
    user,
  };
};
export default signinUser;
