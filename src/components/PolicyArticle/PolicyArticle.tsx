import useTranslation from 'next-translate/useTranslation';
import { Container } from 'styled-bootstrap-grid';
import { ArticleContentHolder } from '@/components/ArticleContentHolder';
import { Article } from '@/components/shared/article';
import { IContentText } from '@/types';

const PolicyArticle = () => {
  const { t } = useTranslation();
  const tText = t('policy:article');

  const content: IContentText = {
    __typename: 'ComponentArticleText',
    id: '1',
    text: tText,
  };

  return (
    <Container fluid>
      <Article>
        <ArticleContentHolder type="policy" content={content} />
      </Article>
    </Container>
  );
};

export default PolicyArticle;
