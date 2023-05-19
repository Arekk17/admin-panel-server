import { Express } from 'express';
import { PrismaClient } from '@prisma/client';

export type User = {
  id: string;
  email: string;
  password: string;
  name?: string | null;
  surname?: string | null;
  phoneNumber?: number | null;
  phonePrefix?: number | null;
  role: keyof typeof ROLE;
};

export type AuthPayload = {
  token: string;
  user: User;
};

export type Landing = {
  id: number;
  title: string;
  name: string;
  slug: string;
  content: string;
};

export type Order = {
  id: string;
  user: User;
  course: Course;
  bundle: Bundle;
  orderedAt: string;
};

export type Progress = {
  id: number;
  user: User;
  course: Course;
  lessons: number;
  exercises: number;
  words: number;
};

export type Course = {
  id: number;
  name: string;
  level: Level;
  bundler: Bundle;
  language: Language;
  lessons: Array<Lesson>;
};

export type Level = {
  id: number;
  name: string;
  imageUrl?: string;
  description?: string;
  courses: Array<Course>;
};

export type Bundle = {
  id: number;
  name: string;
  content: string;
  price: number;
  courses: Array<Course>;
};

export type Language = {
  id: number;
  name: string;
  logo: string;
  courses: Array<Course>;
};

export type Lesson = {
  id: number;
  name: string;
  course: Course;
  words: Array<Word>;
};

export type Word = {
  id: number;
  original: string;
  foreign: string;
  pronunciation: string;
  audioUrl: string;
  imageUrl: string;
  language?: Language;
  wordGroup?: keyof typeof WORDGROUP;
  lesson?: Lesson;
};

export type Sentence = {
  id: number;
  original: string;
  foreign: string;
  pronunciation: string;
  audioUrl: string;
};

export type Exercise = {
  id: number;
  name: string;
  lesson: Lesson;
};

export enum WORDGROUP {
  VERB = 'VERB',
  NOUN = 'NOUN',
  ADJECTIVE = 'ADJECTIVE',
  ADVERB = 'ADVERB',
  PRONOUN = 'PRONOUN',
  ARTICLE = 'ARTICLE',
  PREPOSITION = 'PREPOSITION',
  CONJUCTION = 'CONJUCTION',
  NUMERAL = 'NUMERAL',
}

export enum ROLE {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  TEACHER = 'TEACHER',
}

export type Context = {
  req: Express.Request;
  prisma: PrismaClient;
};
