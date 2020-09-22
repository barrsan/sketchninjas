import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled, { css } from 'styled-components';
import { up, down } from 'styled-breakpoints';
import { Container } from 'styled-bootstrap-grid';
import { SectionTitle } from '@/components/SectionTitle';
import { SecondaryButton } from '@/components/Buttons';
import { Works } from '@/components/Works';
import { colors } from '@/constants';

interface IProps {
  disabledTitle?: boolean;
}

interface IMainContentProps {
  disabledTitle: boolean;
}

const Wrapper = styled.section<IMainContentProps>`
  background-color: ${colors.WHITE};

  ${({ disabledTitle }: IMainContentProps) => {
    if (disabledTitle) {
      return css`
        padding: 72px 0;

        ${down('md')} {
          padding-top: 20px;
        }

        ${down('xs')} {
          padding-bottom: 0;
        }
      `;
    }
    return css`
      padding: 100px 0;
    `;
  }}
`;

const SectionTitleWrapper = styled.div`
  padding: 0 0 202px 0;
  text-align: center;

  ${down('xxl')} {
    padding-bottom: 172px;
  }

  ${down('md')} {
    padding-bottom: 122px;
  }

  ${down('sm')} {
    padding-bottom: 72px;
  }
`;

const Intro = styled.p`
  max-width: 490px;
  margin: 30px auto 0 auto;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: ${colors.BLACK};
  text-align: center;
`;

const MainContent = styled(Container)<IMainContentProps>`
  width: 100%;
  max-width: 1440px;

  ${({ disabledTitle }: IMainContentProps) => {
    if (disabledTitle) {
      return css`
        padding-top: 72px;

        ${down('xs')} {
          padding-top: 0;
        }
      `;
    }
    return css`
      padding-top: 0;
    `;
  }}

  ${up('xxl')} {
    width: 80%;
  }
`;

const AllWorks = styled.div`
  width: 200px;
  margin: 10px auto 0 auto;
  text-align: center;

  ${down('md')} {
    padding-top: 60px;
  }
`;

const WorksSection: FC<IProps> = ({ disabledTitle = false }: IProps) => {
  const { t } = useTranslation();
  const tWorks = t('works:works');
  const tIntro = t('works:intro');
  const tAllWorks = t('works:allWorks');

  return (
    <Wrapper disabledTitle={disabledTitle}>
      {!disabledTitle ? (
        <Container>
          <SectionTitleWrapper>
            <SectionTitle>{tWorks}</SectionTitle>
            <Intro>{tIntro}</Intro>
          </SectionTitleWrapper>
        </Container>
      ) : null}
      <MainContent disabledTitle={disabledTitle} fluid>
        <Works />
        {!disabledTitle ? (
          <AllWorks>
            <SecondaryButton block asLink href="/works">
              {tAllWorks}
            </SecondaryButton>
          </AllWorks>
        ) : null}
      </MainContent>
    </Wrapper>
  );
};

export default WorksSection;
