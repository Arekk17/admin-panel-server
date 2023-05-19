import jwt from 'jsonwebtoken';
import getConfig from '../get-config';

const validateToken = (token: string) =>
  jwt.verify(token, getConfig()?.APP_JWT_SECRET!);

export default validateToken;
