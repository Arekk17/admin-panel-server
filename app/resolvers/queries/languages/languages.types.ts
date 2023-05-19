import { Context, Language } from '../../../../types';

type LanguagesArguments = Pick<Language, 'id'>;
export type LanguagesResolver = (
  parent: any,
  args: LanguagesArguments,
  context: Context
) => Promise<Array<Partial<Language> | unknown>>;
