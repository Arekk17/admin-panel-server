import { faker } from '@faker-js/faker';

const generateLevels = async () => {
  const levels = [
    {
      name: 'A1',
      imageUrl: 'https://sjo.bejol.com/img/a1.png',
    },
    {
      name: 'A2',
      imageUrl: 'https://sjo.bejol.com/img/a2.png',
    },
    {
      name: 'B1',
      imageUrl: 'https://sjo.bejol.com/img/b1.png',
    },
    {
      name: 'B2',
      imageUrl: 'https://sjo.bejol.com/img/b2.png',
    },
    {
      name: 'C1',
      imageUrl: 'https://sjo.bejol.com/img/c1.png',
    },
    {
      name: 'C2',
      imageUrl: 'https://sjo.bejol.com/img/c2.png',
    },
    {
      name: 'Turbo',
      imageUrl: 'https://sjo.bejol.com/img/turbo.png',
    },
    {
      name: 'Biznes',
      imageUrl: 'https://sjo.bejol.com/img/biznesowy.png',
    },
    {
      name: 'Junior',
      imageUrl: 'https://sjo.bejol.com/img/jr.png',
    },
  ].map((langauge) => ({ ...langauge, description: faker.lorem.paragraph() }));

  return {
    name: 'level',
    data: levels,
  };
};

export default generateLevels;
