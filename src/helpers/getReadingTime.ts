import { TContent, TContentTextOnly, IContentText } from '@/types';

const getReadingTime = (content: TContentTextOnly | TContent) => {
  const wordsPerMinute = 200;
  let wordCount = 0;

  content.forEach((i) => {
    const blockType = i.__typename; // eslint-disable-line

    if (
      blockType === 'ComponentArticleText' ||
      blockType === 'ComponentArticleQuote'
    ) {
      const item = i as IContentText;
      const textLength = item.text.split(' ').length;

      if (textLength > 0) {
        const value = Math.ceil(textLength / wordsPerMinute);
        wordCount += value;
      }
    }
  });

  return wordCount;
};

export { getReadingTime };
