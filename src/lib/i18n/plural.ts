export default (number: number, locale: string) => {
  const n = Math.round(number);
  const localePack1 = ['en'];

  // ru
  if (locale === 'ru') {
    if (n % 10 === 1 && n % 100 !== 11) {
      return 0;
    }
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
      return 1;
    }
    return 2;
  }

  // en
  if (localePack1.includes(locale)) {
    return n !== 1 ? 1 : 0;
  }

  return 0;
};
