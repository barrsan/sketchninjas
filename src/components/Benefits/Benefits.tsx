import { useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Row, Col } from 'styled-bootstrap-grid';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion, useAnimation } from 'framer-motion';
import { SvgIdea, SvgChessHorse, SvgRocket } from '@/components/Svg';
import { useViewport } from '@/hooks/useSmoothScrollViewport';
import { colors } from '@/constants';
import BenefitsItem from './BenefitsItem';

const hiddenBenefitState = {
  y: 50,
  opacity: 0,
};

const getVisibleBenefitState = (i: number) => ({
  y: 0,
  opacity: 1,
  transition: {
    duration: 0.5,
    delay: i,
  },
});

const Benefits = () => {
  const controls = useAnimation();
  const { t } = useTranslation();
  const triggerRef = useRef<HTMLDivElement>();
  const timeout = useRef(null);
  const { smoothScrollViewport } = useViewport();

  const benefits = {
    col1: [
      {
        id: '1',
        title: t('benefits:benefit1'),
        description: t('benefits:benefitDescription1'),
        color: colors.ROSE_BUD,
        iconComponent: SvgIdea,
        iconHeight: 28,
        animationDelay: 0,
      },
      {
        id: '2',
        title: t('benefits:benefit2'),
        description: t('benefits:benefitDescription2'),
        color: colors.DULL_LAVENDER,
        iconComponent: SvgRocket,
        iconHeight: 24,
        animationDelay: 0.2,
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
        animationDelay: 0.4,
      },
    ],
  };

  useEffect(() => {
    let stInstance: gsap.plugins.ScrollTriggerInstance = null;

    if (triggerRef && triggerRef.current && smoothScrollViewport) {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        stInstance = ScrollTrigger.create({
          trigger: triggerRef.current,
          scroller: smoothScrollViewport,
          start: 'top 85%',
          onEnter: () => {
            controls.start(getVisibleBenefitState);
          },
          onLeaveBack: () => {
            controls.start(hiddenBenefitState);
          },
        });
      }, 500);
    }

    return () => {
      if (stInstance) {
        stInstance.kill();
      }
      clearTimeout(timeout.current);
    };
  }, [triggerRef, smoothScrollViewport]);

  return (
    <Row alignItems="center" ref={triggerRef}>
      <Col sm={12} md={6}>
        {benefits.col1.map((i) => (
          <motion.div
            key={i.id}
            custom={i.animationDelay}
            initial={hiddenBenefitState}
            animate={controls}
          >
            <BenefitsItem
              title={i.title}
              description={i.description}
              color={i.color}
              iconHeight={i.iconHeight}
              IconComponent={i.iconComponent}
            />
          </motion.div>
        ))}
      </Col>
      <Col sm={12} md={6}>
        {benefits.col2.map((i) => (
          <motion.div
            key={i.id}
            initial={hiddenBenefitState}
            custom={i.animationDelay}
            animate={controls}
          >
            <BenefitsItem
              title={i.title}
              description={i.description}
              color={i.color}
              iconHeight={i.iconHeight}
              IconComponent={i.iconComponent}
            />
          </motion.div>
        ))}
      </Col>
    </Row>
  );
};

export default Benefits;
