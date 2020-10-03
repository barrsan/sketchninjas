import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import hexToRgba from 'hex-to-rgba';
import { SectionTitle } from '@/components/SectionTitle';
import { Benefits } from '@/components/Benefits';
import { SectionSubtitle } from '@/components/shared/common';
import { colors } from '@/constants';

const Wrapper = styled.section`
  padding: 100px 0;
  background-color: ${hexToRgba(colors.SAIL, 0.1)};
`;

const MainContent = styled.div`
  padding: 30px 0 0 0;
`;

const Description = styled.p`
  font-size: 16px;
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
                <SectionSubtitle>{tIntro}</SectionSubtitle>
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
