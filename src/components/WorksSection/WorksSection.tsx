import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled, { css } from 'styled-components';
import { up, down } from 'styled-breakpoints';
import { Container } from 'styled-bootstrap-grid';
import { SectionTitle } from '@/components/SectionTitle';
import { SecondaryButton } from '@/components/Buttons';
import { Works } from '@/components/Works';
import { SectionSubtitle } from '@/components/shared/common';
import { colors } from '@/constants';
import { IWork } from '@/types';

interface IProps {
  disabledTitle?: boolean;
  works: IWork[];
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

const WorksSection: FC<IProps> = ({ works, disabledTitle = false }: IProps) => {
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
            <SectionSubtitle centered>{tIntro}</SectionSubtitle>
          </SectionTitleWrapper>
        </Container>
      ) : null}
      <MainContent disabledTitle={disabledTitle} fluid>
        <Works works={works} />
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
