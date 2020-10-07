import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import moment from 'moment';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { SectionSubtitle } from '@/components/shared/common';
import { colors } from '@/constants';

interface IProps {
  title: string;
  description: string;
  date: string;
  minRead: number;
}

const Wrapper = styled.div`
  margin-top: 182px;
  padding: 60px 0;

  ${down('lg')} {
    margin-top: 110px;
  }

  ${down('xs')} {
    padding: 30px 0;
  }
`;

const Title = styled.h1`
  margin-bottom: 40px;
  max-width: 768px;
  font-size: 46px;
  font-weight: 800;
  line-height: 1.4;
  color: ${colors.BLACK};

  ${down('md')} {
    font-size: 32px;
  }
`;

const Description = styled(SectionSubtitle)`
  margin-bottom: 60px;
  max-width: 600px;

  ${down('md')} {
    font-size: 18px;
  }
`;

const Date = styled.p`
  margin-bottom: 26px;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 2px;
  color: ${colors.BLUE};

  ${down('lg')} {
    line-height: 1.5;
  }

  ${down('xs')} {
    font-size: 13px;
  }
`;

const MinRead = styled.span`
  color: ${colors.BLACK};
`;

const BlogPostHead: FC<IProps> = ({
  title,
  description,
  date,
  minRead,
}: IProps) => {
  const { t, lang } = useTranslation();

  const tMinRead = t('blog:minRead', { count: minRead });

  moment.locale(lang);

  const dateLabel = moment(date).format('DD MMMM YYYY');

  return (
    <Wrapper>
      <Date>
        {dateLabel} <MinRead>/ {tMinRead}</MinRead>
      </Date>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default BlogPostHead;
