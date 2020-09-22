import { FC } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { Container } from 'styled-bootstrap-grid';
import { colors } from '@/constants';

interface IProps {
  title: string;
  subtitle: string;
}

const Wrapper = styled.div`
  margin-top: 132px;
  padding: 60px 0;

  ${down('lg')} {
    margin-top: 90px;
  }

  ${down('xs')} {
    padding: 30px 0;
  }
`;

const PageName = styled.p`
  margin-bottom: 26px;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 2px;
  color: ${colors.BLUE};

  ${down('lg')} {
    line-height: 1.5;
  }

  ${down('xs')} {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  max-width: 768px;
  font-size: 66px;
  font-weight: 800;
  line-height: 88px;
  color: ${colors.BLACK};

  ${down('lg')} {
    font-size: 46px;
    line-height: 1.3;
  }

  ${down('xs')} {
    font-size: 28px;
  }
`;

const PageTitle: FC<IProps> = ({ title, subtitle }: IProps) => {
  return (
    <Wrapper>
      <Container>
        <PageName>{subtitle}</PageName>
        <Title>{title}</Title>
      </Container>
    </Wrapper>
  );
};

export default PageTitle;
