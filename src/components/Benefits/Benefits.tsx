import { useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Row, Col } from 'styled-bootstrap-grid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SvgIdea, SvgChessHorse, SvgRocket } from '@/components/Svg';
import { useViewport } from '@/hooks/useSmoothScrollViewport';
import { colors } from '@/constants';
import BenefitsItem from './BenefitsItem';

const Benefits = () => {
  const { t } = useTranslation();

  const triggerRef = useRef<HTMLDivElement>();
  const item1Ref = useRef<HTMLDivElement>();
  const item2Ref = useRef<HTMLDivElement>();
  const item3Ref = useRef<HTMLDivElement>();

  const benefits = {
    col1: [
      {
        id: '1',
        title: t('benefits:benefit1'),
        description: t('benefits:benefitDescription1'),
        color: colors.ROSE_BUD,
        iconComponent: SvgIdea,
        iconHeight: 28,
        ref: item1Ref,
      },
      {
        id: '2',
        title: t('benefits:benefit2'),
        description: t('benefits:benefitDescription2'),
        color: colors.DULL_LAVENDER,
        iconComponent: SvgRocket,
        iconHeight: 24,
        ref: item2Ref,
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
        ref: item3Ref,
      },
    ],
  };

  const { smoothScrollViewport } = useViewport();

  useEffect(() => {
    if (
      triggerRef &&
      triggerRef.current &&
      item1Ref &&
      item1Ref.current &&
      item2Ref &&
      item2Ref.current &&
      item3Ref &&
      item3Ref.current &&
      smoothScrollViewport
    ) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: 'none', duration: 0.5 });

      const timeline = gsap.timeline();

      timeline
        .from(item1Ref.current, { y: 50, opacity: 0 })
        .from(item2Ref.current, { y: 50, opacity: 0 }, '-=0.2')
        .from(item3Ref.current, { y: 50, opacity: 0 }, '-=0.2');

      ScrollTrigger.create({
        animation: timeline,
        trigger: triggerRef.current,
        scroller: smoothScrollViewport,
        start: 'top 85%',
        onEnter: () => timeline.play(),
      });

      ScrollTrigger.create({
        trigger: triggerRef.current,
        scroller: smoothScrollViewport,
        onLeaveBack: () => timeline.pause(0),
      });
    }
  }, [item1Ref, item2Ref, item3Ref, triggerRef, smoothScrollViewport]);

  return (
    <Row alignItems="center" ref={triggerRef}>
      <Col sm={12} md={6}>
        {benefits.col1.map((i) => (
          <BenefitsItem
            ref={i.ref}
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
            ref={i.ref}
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
