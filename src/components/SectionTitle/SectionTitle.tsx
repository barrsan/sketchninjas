import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import { colors } from '@/constants';

interface IProps {
  children: ReactNode;
  align?: 'center' | 'left' | 'right';
}

interface IStyledTitle {
  align: 'center' | 'left' | 'right';
}

interface IStyledDivider extends IStyledTitle {}

const Wrapper = styled.div`
  display: inline-block;
`;

const Title = styled.h2<IStyledTitle>`
  margin: 0 0 24px 0;
  font-size: 58px;
  font-weight: 800;
  text-align: ${({ align }: IStyledTitle) => align};
  color: ${colors.BLACK};

  ${down('lg')} {
    font-size: 46px;
    line-height: 1.3;
  }

  ${down('xs')} {
    font-size: 28px;
  }
`;

const Divider = styled.hr<IStyledDivider>`
  width: 80px;
  height: 6px;
  border: 0;
  border-radius: 5px;
  background-color: ${colors.BLUE};

  ${({ align }: IStyledDivider) => {
    switch (align) {
      case 'center':
        return css`
          margin: 0 auto;
        `;
      default:
        return css`
          margin: 0;
        `;
    }
  }}
`;

const SectionTitle: FC<IProps> = ({ children, align = 'center' }: IProps) => {
  return (
    <Wrapper>
      <Title align={align}>{children}</Title>
      <Divider align={align} />
    </Wrapper>
  );
};

export default SectionTitle;
