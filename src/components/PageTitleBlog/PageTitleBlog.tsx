import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { Container } from 'styled-bootstrap-grid';
import { useCursorFollower } from '@/hooks/useCursorFollower';
import { colors } from '@/constants';

const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 132px;
  padding-top: 60px;
  padding-bottom: 30px;

  ${down('lg')} {
    margin-top: 90px;
  }

  ${down('xs')} {
    padding-top: 30px;
  }
`;

const PageTitle = styled.h1`
  max-width: 768px;
  font-size: 66px;
  font-weight: 800;
  line-height: 1.3;
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

const PageTitleBlog = () => {
  const { setCursorSize, setCursorType } = useCursorFollower();

  const { t } = useTranslation();

  const tTitle = t('blog:blog');
  const tViewAll = t('blog:viewAllPosts');

  const handleMouseMove = () => {
    setCursorType('baseLink');
    setCursorSize(50);
  };

  const handleMouseLeave = () => {
    setCursorSize(10);
    setCursorType('default');
  };

  return (
    <Container>
      <PageTitleWrapper>
        <PageTitle>{tTitle}</PageTitle>
        <Link href="/contact" passHref>
          <AllPostsLink
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {tViewAll}
          </AllPostsLink>
        </Link>
      </PageTitleWrapper>
    </Container>
  );
};

export default PageTitleBlog;
