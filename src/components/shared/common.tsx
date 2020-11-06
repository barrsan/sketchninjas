import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import { colors } from '@/constants';

interface ISectionSubtitleProps {
  centered?: boolean;
}

const Section = styled.section`
  padding: 100px 0;

  ${down('md')} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const SectionSubtitle = styled.p<ISectionSubtitleProps>`
  margin: 0 0 24px 0;
  font-size: 20px;
  font-weight: 300;
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

const PageHeadSpacer = styled.div`
  margin-top: 200px;

  ${down('lg')} {
    margin-top: 160px;
  }

  ${down('xs')} {
    margin-top: 120px;
  }
`;

export { Section, SectionSubtitle, PageHeadSpacer };
