import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { Container } from 'styled-bootstrap-grid';
import { colors, common } from '@/constants';

interface IProps {
  hideAllPosts?: boolean;
}

const { CURSOR_FOCUS_CLASS_NAME } = common;

const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 132px;
  padding-top: 60px;
  padding-bottom: 50px;

  ${down('lg')} {
    margin-top: 90px;
  }

  ${down('xs')} {
    padding-top: 30px;
  }
`;

const PageTitle = styled.h1`
  max-width: 768px;
  font-size: 58px;
  font-weight: 800;
  line-height: 1.4;
  color: ${colors.BLACK};

  ${down('lg')} {
    font-size: 46px;
  }

  ${down('xs')} {
    font-size: 28px;
  }
`;

const AllPostsLink = styled.a`
  position: relative;
  z-index: 2;
  top: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  text-decoration: none;
  color: ${colors.BLUE};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${colors.MAJORELLE_BLUE};
  }

  ${down('xs')} {
    font-size: 16px;
  }
`;

const PageTitleBlog: FC<IProps> = ({ hideAllPosts = false }: IProps) => {
  const { t } = useTranslation();

  const tTitle = t('blog:blog');
  const tViewAll = t('blog:viewAllPosts');

  return (
    <Container>
      <PageTitleWrapper>
        <PageTitle>{tTitle}</PageTitle>
        {hideAllPosts ? null : (
          <Link href="/blog/page/1" passHref>
            <AllPostsLink data-cursor={CURSOR_FOCUS_CLASS_NAME}>
              {tViewAll}
            </AllPostsLink>
          </Link>
        )}
      </PageTitleWrapper>
    </Container>
  );
};

export default PageTitleBlog;
