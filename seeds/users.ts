import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';
import { ROLE, User } from '../types';

const generateUsers = async (count: number = 20) => {
  const password = await bcrypt.hash('password123', 10);
  const users: Array<Omit<User, 'id'>> = Array.from({ length: count }, () => ({
    email: faker.internet.email(),
    password,
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    phoneNumber: faker.datatype.number({ max: 999999999 }),
    phonePrefix: faker.datatype.number({ max: 999 }),
    role: ROLE.USER,
  }));

  return {
    name: 'user',
    data: users,
  };
};

export default generateUsers;
