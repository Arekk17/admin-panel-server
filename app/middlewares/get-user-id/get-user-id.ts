import validateToken from '../../utils/validate-token';

const getUserId = (req: any) => {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        return;
      }
      const { userId }: any = validateToken(token);
      return userId;
    }
  }
};
export default getUserId;
