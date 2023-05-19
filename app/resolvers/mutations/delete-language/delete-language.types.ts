import { Context, Language } from '../../../../types';

type DeleteLanguageArguments = {
  id: Language['id'];
};
export type DeleteLanguageResolver = (
  parent: any,
  args: DeleteLanguageArguments,
  context: Context
) => Promise<Partial<Language>>;
