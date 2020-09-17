import { useState, useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled, { css } from 'styled-components';
import { up, down } from 'styled-breakpoints';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import hexToRgba from 'hex-to-rgba';
import { throttle } from 'throttle-debounce';
import { WorkStagesProgress } from '@/components/WorkStagesProgress';
import { SectionTitle } from '@/components/SectionTitle';
import { StageNumber } from '@/components/StageNumber';
import { SvgPartners, SvgRocket, SvgPalette, SvgCode } from '@/components/Svg';
import { useViewport } from '@/hooks/useSmoothScrollViewport';
import { colors } from '@/constants';
import WorkStageInfo from './WorkStageInfo';
import WorkStagesList from './WorkStagesList';

interface IPointWrapperProps {
  percent: number;
}

interface IPointProps {
  active: boolean;
}

const PROGRESS_PERCENT_25 = 25;
const PROGRESS_PERCENT_50 = 50;
const PROGRESS_PERCENT_75 = 75;
const PROGRESS_DIAMETER = 422;

const Section = styled.section`
  padding: 50px 0;

  ${down('md')} {
    padding: 100px 0;
  }
`;

const SectionTitleWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 150px;
  left: -50px;
  padding: 0 0 10px 0;
  text-align: center;

  ${down('md')} {
    position: relative;
    top: 0;
    left: 0;
    padding-bottom: 72px;

    h2 {
      text-align: center;
    }

    hr {
      margin: 0 auto;
    }
  }
`;

const Inner = styled.div`
  position: relative;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 822px;
  height: 100%;
`;

const Progress = styled.div`
  position: relative;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 822px;
  height: calc(900px + 5vh);

  ${down('md')} {
    display: none;
  }

  @media (max-height: 768px) {
    display: none;
  }
`;

const Stages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 422px;
  height: 422px;
`;

const StagesProgressWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const PointWrapper = styled.div<IPointWrapperProps>`
  position: absolute;

  ${({ percent }: IPointWrapperProps) => {
    switch (percent) {
      case 25:
        return css`
          top: calc(50% - 15px);
          right: -8px;
        `;
      case 50:
        return css`
          right: calc(50% - 15px);
          bottom: -8px;
        `;
      case 75:
        return css`
          top: calc(50% - 15px);
          left: -8px;
        `;
      default:
        return css`
          top: -8px;
          right: calc(50% - 15px);
        `;
    }
  }}
`;

const Point = styled.div<IPointProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${({ active }: IPointProps) =>
    active ? colors.BLUE : colors.BLUE_MOON};
  border-radius: 99%;
  transition: all 0.2s;

  ${({ active }: IPointProps) => {
    if (active) {
      return css`
        box-shadow: 0 6px 40px 0 ${hexToRgba(colors.BLUE, 0.4)};
      `;
    }
    return '';
  }}

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: ${({ active }: IPointProps) =>
      active ? colors.WHITE : colors.BLUE_MOON};
    border-radius: 99%;
    transition: all 0.2s;
  }
`;

const StageWrapper = styled.div`
  margin-top: 80px;
`;

const StageNumberWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 340px;
  right: -80px;

  ${up('xl')} {
    top: 310px;
    right: -140px;
  }
`;

const Circle1 = styled.div`
  position: absolute;
  z-index: -1;
  width: 822px;
  height: 822px;
  border: solid 2px ${colors.ZIRCON};
  border-radius: 99%;
`;

const Circle2 = styled.div`
  position: absolute;
  z-index: -1;
  width: 622px;
  height: 622px;
  border: solid 3px ${colors.ZIRCON};
  border-radius: 99%;
`;

const WorkStagesListWrapper = styled.div`
  display: none;

  ${down('md')} {
    display: block;
  }
`;

const getStageNumber = (progress: number) => {
  if (progress < PROGRESS_PERCENT_25) {
    return 1;
  }
  if (progress < PROGRESS_PERCENT_50) {
    return 2;
  }
  if (progress < PROGRESS_PERCENT_75) {
    return 3;
  }
  return 4;
};

const WorkStagesSection = () => {
  const [progress, setProgress] = useState(0);
  const [scrollTriggerInstance, setScrollTriggerInstance] = useState(null);

  const { smoothScrollViewport } = useViewport();

  const progressRef = useRef<HTMLDivElement>();

  const { t } = useTranslation();

  const tWorkStages = t('works:workStages');

  const tStageTitle1 = t('works:stages.stage1.title');
  const tStageTitle2 = t('works:stages.stage2.title');
  const tStageTitle3 = t('works:stages.stage3.title');
  const tStageTitle4 = t('works:stages.stage4.title');

  const tStageDescription1 = t('works:stages.stage1.description');
  const tStageDescription2 = t('works:stages.stage2.description');
  const tStageDescription3 = t('works:stages.stage3.description');
  const tStageDescription4 = t('works:stages.stage4.description');

  const throttleSetProgress = throttle(50, false, (num) => {
    setProgress(num);
  });

  const disableScrollTrigger = () => {
    if (scrollTriggerInstance) {
      scrollTriggerInstance.disable();
    }
  };

  const enableScrollTrigger = () => {
    if (scrollTriggerInstance) {
      scrollTriggerInstance.enable();
    }
  };

  const initScrollTrigger = (trigger: any, scroller: any) => {
    if (trigger && scroller && !scrollTriggerInstance) {
      const instance = ScrollTrigger.create({
        trigger,
        scroller,
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=5000',
        onUpdate: (self) => {
          const value = Math.round(Number(self.progress.toFixed(2)) * 100);
          throttleSetProgress(value);
        },
      });

      setScrollTriggerInstance(instance);
    } else if (scrollTriggerInstance) {
      enableScrollTrigger();
    }
  };

  const throttleInitScrollTrigger = throttle(
    100,
    false,
    (trigger: any, scroller: any) => {
      initScrollTrigger(trigger, scroller);
    },
  );

  useEffect(() => {
    if (progressRef && progressRef.current && smoothScrollViewport) {
      ScrollTrigger.matchMedia({
        '(min-width: 992px)': () => {
          throttleInitScrollTrigger(progressRef.current, smoothScrollViewport);
        },
        '(max-width: 991px)': () => {
          disableScrollTrigger();
        },
      });
    }
  }, [progressRef, smoothScrollViewport]);

  const stageNumber = getStageNumber(progress);

  return (
    <Section ref={progressRef}>
      <Inner>
        <SectionTitleWrapper>
          <SectionTitle align="left">{tWorkStages}</SectionTitle>
        </SectionTitleWrapper>
        <WorkStagesListWrapper>
          <WorkStagesList />
        </WorkStagesListWrapper>
        <Progress>
          <StageNumberWrapper>
            <StageNumber firstNumber={0} secondNumber={stageNumber} />
          </StageNumberWrapper>
          <Circle1 />
          <Circle2 />
          <Stages>
            <StageWrapper>
              {progress >= 0 && progress < PROGRESS_PERCENT_25 ? (
                <WorkStageInfo
                  title={tStageTitle1}
                  description={tStageDescription1}
                  icon={<SvgPartners fill={colors.WHITE} height={50} />}
                />
              ) : null}
              {progress >= PROGRESS_PERCENT_25 &&
              progress < PROGRESS_PERCENT_50 ? (
                <WorkStageInfo
                  title={tStageTitle2}
                  description={tStageDescription2}
                  icon={<SvgPalette fill={colors.WHITE} height={50} />}
                />
              ) : null}
              {progress >= PROGRESS_PERCENT_50 &&
              progress < PROGRESS_PERCENT_75 ? (
                <WorkStageInfo
                  title={tStageTitle3}
                  description={tStageDescription3}
                  icon={<SvgCode fill={colors.WHITE} height={50} />}
                />
              ) : null}
              {progress >= PROGRESS_PERCENT_75 ? (
                <WorkStageInfo
                  title={tStageTitle4}
                  description={tStageDescription4}
                  icon={<SvgRocket fill={colors.WHITE} height={50} />}
                />
              ) : null}
            </StageWrapper>
            <StagesProgressWrapper>
              <PointWrapper percent={0}>
                <Point active={progress >= 0} />
              </PointWrapper>
              <PointWrapper percent={PROGRESS_PERCENT_25}>
                <Point active={progress >= PROGRESS_PERCENT_25} />
              </PointWrapper>
              <PointWrapper percent={PROGRESS_PERCENT_50}>
                <Point active={progress >= PROGRESS_PERCENT_50} />
              </PointWrapper>
              <PointWrapper percent={PROGRESS_PERCENT_75}>
                <Point active={progress >= PROGRESS_PERCENT_75} />
              </PointWrapper>
              <WorkStagesProgress
                progress={progress}
                width={PROGRESS_DIAMETER}
              />
            </StagesProgressWrapper>
          </Stages>
        </Progress>
      </Inner>
    </Section>
  );
};

export default WorkStagesSection;
