import useTranslation from 'next-translate/useTranslation';
import { Row, Col } from 'styled-bootstrap-grid';
import { SvgIdea, SvgChessHorse, SvgRocket } from '@/components/Svg';
import { colors } from '@/constants';
import BenefitsItem from './BenefitsItem';

const Benefits = () => {
  const { t } = useTranslation();

  const benefits = {
    col1: [
      {
        id: '1',
        title: t('benefits:benefit1'),
        description: t('benefits:benefitDescription1'),
        color: colors.ROSE_BUD,
        iconComponent: SvgIdea,
        iconHeight: 28,
      },
      {
        id: '2',
        title: t('benefits:benefit2'),
        description: t('benefits:benefitDescription2'),
        color: colors.DULL_LAVENDER,
        iconComponent: SvgRocket,
        iconHeight: 24,
      },
    ],
    col2: [
      {
        id: '3',
        title: t('benefits:benefit3'),
        description: t('benefits:benefitDescription3'),
        color: colors.PALE_ROBIN_EGG_BLUE,
        iconComponent: SvgChessHorse,
        iconHeight: 28,
      },
    ],
  };

  return (
    <Row alignItems="center">
      <Col sm={12} md={6}>
        {benefits.col1.map((i) => (
          <BenefitsItem
            key={i.id}
            title={i.title}
            description={i.description}
            color={i.color}
            iconHeight={i.iconHeight}
            IconComponent={i.iconComponent}
          />
        ))}
      </Col>
      <Col sm={12} md={6}>
        {benefits.col2.map((i) => (
          <BenefitsItem
            key={i.id}
            title={i.title}
            description={i.description}
            color={i.color}
            iconHeight={i.iconHeight}
            IconComponent={i.iconComponent}
          />
        ))}
      </Col>
    </Row>
  );
};

export default Benefits;
