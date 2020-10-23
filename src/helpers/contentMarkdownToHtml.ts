import {
  TContent,
  IContentText,
  IContentQuote,
  IContentSingleImage,
  IContentImagesGrid,
} from '@/types';
import { markdownToHtml } from './markdownToHtml';

const contentMarkdownToHtml = async (content: TContent) => {
  const result = await Promise.all(
    content.map(async (i) => {
      const blockType = i.__typename; // eslint-disable-line

      if (blockType === 'ComponentArticleText') {
        const item: IContentText = i as IContentText;
        item.text = await markdownToHtml(item.text || '');
        return item;
      }

      if (blockType === 'ComponentArticleQuote') {
        const item: IContentQuote = i as IContentQuote;
        item.text = await markdownToHtml(item.text || '');
        return item;
      }

      if (blockType === 'ComponentArticleSingleImage') {
        const item: IContentSingleImage = i as IContentSingleImage;
        item.caption = await markdownToHtml(item.caption || '');
        return item;
      }

      if (blockType === 'ComponentArticleImagesGrid') {
        const item: IContentImagesGrid = i as IContentImagesGrid;
        const images = await Promise.all(
          item.images.map(async (img) => {
            const currentImage = img;
            currentImage.caption = await markdownToHtml(img.caption || '');
            return currentImage;
          }),
        );
        item.images = images;
        return item;
      }

      return i;
    }),
  );

  return result;
};

export { contentMarkdownToHtml };
