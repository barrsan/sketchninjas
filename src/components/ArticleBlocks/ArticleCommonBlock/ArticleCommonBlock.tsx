import { FC } from 'react';
import { ArticleBlock } from '@/components/shared/article';
import {
  TContentBlock,
  IContentText,
  IContentQuote,
  IContentSingleImage,
  IContentImagesGrid,
  IContentVideo,
  TTextBlockType,
} from '@/types';
import { ArticleText } from '../ArticleText';
import { ArticleImage } from '../ArticleImage';
import { ArticleImageGrid } from '../ArticleImageGrid';
import { ArticleQuote } from '../ArticleQuote';
import { ArticleVideo } from '../ArticleVideo';

interface IProps {
  content: TContentBlock;
  type?: TTextBlockType;
}

const ArticleCommonBlock: FC<IProps> = ({
  content,
  type = 'default',
}: IProps) => {
  const renderContentBlock = (i: TContentBlock) => {
    const blockType = i.__typename; // eslint-disable-line

    if (blockType === 'ComponentArticleText') {
      const item: IContentText = i as IContentText;

      return (
        <ArticleBlock>
          <ArticleText type={type} markup={item.text} />
        </ArticleBlock>
      );
    }

    if (blockType === 'ComponentArticleQuote') {
      const item: IContentQuote = i as IContentQuote;

      return (
        <ArticleBlock>
          <ArticleQuote markup={item.text} author={item.author} />
        </ArticleBlock>
      );
    }

    if (blockType === 'ComponentArticleSingleImage') {
      const item: IContentSingleImage = i as IContentSingleImage;

      const articleBlockType = item.type === 'full' ? 'full' : 'default';

      return (
        <ArticleBlock type={articleBlockType}>
          <ArticleImage
            src={item.image.url}
            caption={item.caption}
            mode={item.type}
            parallax={item.parallax}
            alt="img"
          />
        </ArticleBlock>
      );
    }

    if (blockType === 'ComponentArticleImagesGrid') {
      const item: IContentImagesGrid = i as IContentImagesGrid;

      const items = item.images.map((gridItem) => {
        const id = gridItem.image.formats.large
          ? gridItem.image.formats.large.hash
          : gridItem.image.url;

        const src = gridItem.image.formats.large
          ? gridItem.image.formats.large.url
          : gridItem.image.url;

        return {
          id,
          src,
          caption: gridItem.caption,
          description: gridItem.description,
        };
      });

      return (
        <ArticleBlock type="wide">
          <ArticleImageGrid items={items} />
        </ArticleBlock>
      );
    }

    if (blockType === 'ComponentArticleVideo') {
      const item: IContentVideo = i as IContentVideo;

      return (
        <ArticleBlock>
          <ArticleVideo
            src={item.video.url}
            autoPlay={item.autoplay}
            controls={item.controls}
            loop={item.loop}
            muted={item.muted}
            playsInline={item.playsinline}
            mode={item.videoDisplayType}
          />
        </ArticleBlock>
      );
    }

    return null;
  };

  return renderContentBlock(content);
};

export default ArticleCommonBlock;
