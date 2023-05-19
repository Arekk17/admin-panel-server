import { Context, Language } from '../../../../types';

type LanguageArguments = Pick<Language, 'id'>;
export type LanguageResolver = (
  parent: any,
  args: LanguageArguments,
  context: Context
) => Promise<Partial<Language> | unknown>;
