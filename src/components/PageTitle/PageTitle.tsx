import { FC } from 'react';
import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import { Container } from 'styled-bootstrap-grid';
import { colors } from '@/constants';

interface IProps {
  title: string;
  subtitle?: string;
  isErrorPage?: boolean;
}

interface IWrapperProps {
  isErrorPage: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  ${({ isErrorPage }: IWrapperProps) => {
    if (isErrorPage) {
      return css`
        padding: 60px 0 32px 0;
      `;
    }

    return css`
      margin-top: 132px;
      padding: 60px 0;

      ${down('lg')} {
        margin-top: 90px;
      }

      ${down('xs')} {
        padding: 30px 0;
      }
    `;
  }}
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
  font-size: 58px;
  font-weight: 800;
  line-height: 1.4;
  color: ${colors.BLACK};

  ${down('lg')} {
    font-size: 46px;
    line-height: 1.3;
  }

  ${down('xs')} {
    font-size: 28px;
  }
`;

const PageTitle: FC<IProps> = ({
  title,
  subtitle = '',
  isErrorPage = false,
}: IProps) => {
  return (
    <Wrapper isErrorPage={isErrorPage}>
      <Container>
        {subtitle ? <PageName>{subtitle}</PageName> : null}
        <Title>{title}</Title>
      </Container>
    </Wrapper>
  );
};

export default PageTitle;
