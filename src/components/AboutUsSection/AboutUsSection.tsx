import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { SectionTitle } from '@/components/SectionTitle';
import { Benefits } from '@/components/Benefits';
import { colors } from '@/constants';

const Wrapper = styled.section`
  padding: 100px 0;
  background-color: ${colors.GHOST_WHITE};
`;

const MainContent = styled.div`
  padding: 30px 0 0 0;
`;

const Intro = styled.p`
  margin: 0 0 24px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: ${colors.BLACK};
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: ${colors.GRAY};
`;

const MainColumnInner = styled.div`
  margin: 0 30px 0 0;

  ${down('md')} {
    margin-right: 0;
  }
`;

const BenefitsWrapper = styled.div`
  margin: 0 0 0 40px;

  ${down('lg')} {
    margin-left: 0;
  }

  ${down('md')} {
    padding-top: 40px;
  }
`;

const AboutUsSection = () => {
  const { t } = useTranslation();
  const tAbout = t('about:about');
  const tIntro = t('about:intro');
  const tDescription = t('about:description');

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={12} lg={5}>
            <MainColumnInner>
              <SectionTitle align="left">{tAbout}</SectionTitle>
              <MainContent>
                <Intro>{tIntro}</Intro>
                <Description>{tDescription}</Description>
              </MainContent>
            </MainColumnInner>
          </Col>
          <Col md={12} lg={7}>
            <BenefitsWrapper>
              <Benefits />
            </BenefitsWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default AboutUsSection;
