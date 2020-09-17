import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { colors } from '@/constants';

interface IProps {
  minRead: number;
  publicationDate: string;
  color?: string;
}

interface IStyledBlogPostDateRootProps {
  color: string;
}

const Wrapper = styled.span<IStyledBlogPostDateRootProps>`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 2.8px;
  color: ${({ color }: IStyledBlogPostDateRootProps) => color};

  ${down('md')} {
    font-size: 13px;
  }
`;

const DotDevider = styled.span`
  padding: 0 10px;
`;

const BlogPostDate: FC<IProps> = ({
  publicationDate,
  minRead,
  color = colors.BLACK,
}: IProps) => {
  const { t } = useTranslation();

  const tMinRead = t('blog:minRead', { count: minRead });

  return (
    <Wrapper color={color}>
      {publicationDate}
      <DotDevider>•</DotDevider>
      {tMinRead}
    </Wrapper>
  );
};

export default BlogPostDate;
