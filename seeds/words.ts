import { faker } from '@faker-js/faker';
import { WORDGROUP } from '../types';

const generateUsers = async (count: number = 20) => {
  const words = Array.from({ length: count }, (_, index) => ({
    original: `${faker.word.adjective()}${index}`,
    foreign: faker.word.adjective(),
    pronunciation: '/ˈpʌmpkɪn/',
    audioUrl: 'https://sjo.bejol.com/audio/upload/srjp9g4cfn.mp3',
    imageUrl: faker.image.animals(),
    wordGroup: WORDGROUP.ADJECTIVE,
  }));

  return {
    name: 'word',
    data: words,
  };
};

export default generateUsers;
