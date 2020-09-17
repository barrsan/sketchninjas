import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { SectionTitle } from '@/components/SectionTitle';
import { ServiceItem } from '@/components/ServiceItem';
import { colors } from '@/constants';

const Wrapper = styled.section`
  padding: 100px 0;
  background-color: ${colors.WHITE};
`;

const SectionTitleWrapper = styled.div`
  padding: 0 0 76px 0;
  text-align: center;
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

const ServicesSection = () => {
  const { t } = useTranslation();
  const tServices = t('services:ourServices');
  const tIntro = t('services:intro');

  const tDesignTitle = t('services:design.title');
  const tDesignDescription = t('services:design.description');
  const tDesignStack = t('services:design.stack');

  const tMotionTitle = t('services:motion.title');
  const tMotionDescription = t('services:motion.description');
  const tMotionStack = t('services:motion.stack');

  const tCodeTitle = t('services:code.title');
  const tCodeDescription = t('services:code.description');
  const tCodeStack = t('services:code.stack');

  return (
    <Wrapper>
      <Container>
        <SectionTitleWrapper>
          <SectionTitle>{tServices}</SectionTitle>
          <Intro>{tIntro}</Intro>
        </SectionTitleWrapper>
        <ServiceItem
          title={tDesignTitle}
          description={tDesignDescription}
          stack={tDesignStack}
          type="design"
          iconPosition="top right"
        />
        <ServiceItem
          title={tMotionTitle}
          description={tMotionDescription}
          stack={tMotionStack}
          type="motion"
          imagePosition="right"
          iconPosition="bottom right"
        />
        <ServiceItem
          title={tCodeTitle}
          description={tCodeDescription}
          stack={tCodeStack}
          type="code"
          iconPosition="top left"
          last
        />
      </Container>
    </Wrapper>
  );
};

export default ServicesSection;
