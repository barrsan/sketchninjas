import styled, { css } from 'styled-components';
import { colors } from '@/constants';

interface ISectionSubtitleProps {
  centered?: boolean;
}

const SectionSubtitle = styled.p<ISectionSubtitleProps>`
  margin: 0 0 24px 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  color: ${colors.BLACK};

  ${({ centered }: ISectionSubtitleProps) => {
    if (centered) {
      return css`
        max-width: 490px;
        margin: 30px auto 0 auto;
        text-align: center;
      `;
    }
    return '';
  }}
`;

export { SectionSubtitle };
