import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { up, down } from 'styled-breakpoints';
import { Container } from 'styled-bootstrap-grid';
import { SectionTitle } from '@/components/SectionTitle';
import { SecondaryButton } from '@/components/Buttons';
import { Works } from '@/components/Works';
import { colors } from '@/constants';

const Wrapper = styled.section`
  padding: 100px 0;
  background-color: ${colors.WHITE};
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

const MainContent = styled(Container)`
  width: 100%;
  max-width: 1440px;

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

const WorksSection = () => {
  const { t } = useTranslation();
  const tWorks = t('works:works');
  const tIntro = t('works:intro');
  const tAllWorks = t('works:allWorks');

  return (
    <Wrapper>
      <Container>
        <SectionTitleWrapper>
          <SectionTitle>{tWorks}</SectionTitle>
          <Intro>{tIntro}</Intro>
        </SectionTitleWrapper>
      </Container>
      <MainContent fluid>
        <Works />
        <AllWorks>
          <SecondaryButton block asLink href="/works">
            {tAllWorks}
          </SecondaryButton>
        </AllWorks>
      </MainContent>
    </Wrapper>
  );
};

export default WorksSection;
