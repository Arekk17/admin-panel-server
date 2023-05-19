import { Context, Language } from '../../../../types';

type CreateLanguageResolverArguments = Omit<Language, 'id'>;
export type CreateLanguageResolver = (
  parent: any,
  args: CreateLanguageResolverArguments,
  context: Context
) => Promise<Partial<Language> | unknown>;
