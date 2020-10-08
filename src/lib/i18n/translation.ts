import dictionaries from './dictionaries';

interface IOptions {
  strings: string[];
  plural: number;
}

const getValueByAlias = (alias: string, plural: number, dictionary: object) => {
  if (dictionary[alias]) {
    return typeof dictionary[alias] === 'string'
      ? dictionary[alias]
      : dictionary[alias][plural];
  }
  return '';
};

const setValueStrings = (value: string, strings: string[]) => {
  let result = value;
  for (let i = 0; i < strings.length; i += 1) {
    const re = new RegExp(`(%s${i})`, 'gi');
    result = result.replace(re, strings[i]);
  }
  return result;
};

export default (alias: string, locale: string, options?: IOptions) => {
  const defaultOptions = {
    strings: [],
    plural: 0,
  };
  const currentOptions = { ...defaultOptions, ...options };
  const { strings, plural } = currentOptions;
  const dictionary = dictionaries[locale];
  let result = alias;

  if (alias && dictionary) {
    result = getValueByAlias(alias, plural, dictionary);

    if (!result) {
      result = getValueByAlias(alias, plural, dictionaries.en) || alias;
    }

    return strings.length ? setValueStrings(result, strings) : result;
  }

  return '';
};
