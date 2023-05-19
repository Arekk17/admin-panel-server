import { Context, Language } from '../../../../types';

export type EditLanguageResolver = (
  parent: any,
  args: Language,
  context: Context
) => Promise<Partial<Language>>;
