import type { LanguagesResolver } from './languages.types';

const languages: LanguagesResolver = async (_, __, { prisma }) =>
  prisma.language.findMany();

export default languages;
