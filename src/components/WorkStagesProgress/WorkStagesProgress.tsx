import { FC, useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '@/constants';

interface IProps {
  progress: number;
  width: number;
  height?: number;
  strokeWidth?: number;
  pathColor?: string;
  trailColor?: string;
}

interface IStyledProgressSvgProps {
  circleStrokeDasharray: string;
  circleStrokeDashoffset: number;
}

const ProgressSvg = styled.svg<IStyledProgressSvgProps>`
  & > circle {
    ${({
      circleStrokeDasharray,
      circleStrokeDashoffset,
    }: IStyledProgressSvgProps) => {
      return css`
        stroke-dasharray: ${circleStrokeDasharray};
        stroke-dashoffset: ${circleStrokeDashoffset};
      `;
    }};

    transition: stroke-dashoffset 0.3s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  & > path {
    stroke-linecap: round;
  }
`;

const WorkStagesProgress: FC<IProps> = ({
  progress,
  width,
  height = width,
  strokeWidth = 3,
  pathColor = colors.BLUE,
  trailColor = colors.BLUE_MOON,
}: IProps) => {
  const [circumferenceState, setCircumferenceState] = useState(0);
  const [offsetState, setOffsetState] = useState(0);

  const svgCircleRef = useRef<SVGCircleElement>();

  const circleRadius = width / 2 - strokeWidth * 2;
  const cx = width / 2;
  const cy = height / 2;
  const pathD = `
    M ${cx},${cy}
    m 0,-${circleRadius}
    a ${circleRadius},${circleRadius} 0 1 1 0,${circleRadius * 2}
    a ${circleRadius},${circleRadius} 0 1 1 0,-${circleRadius * 2}
    `;

  const setProgress = (percent: number) => {
    const offset = circumferenceState - (percent / 100) * circumferenceState;
    setOffsetState(offset);
  };

  useEffect(() => {
    let percent = progress;

    if (progress > 100) {
      percent = 100;
    } else if (progress < 0) {
      percent = 0;
    }

    setProgress(percent);
  }, [progress, setProgress]);

  useEffect(() => {
    const radius = svgCircleRef.current.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    setCircumferenceState(circumference);
  }, [svgCircleRef, setCircumferenceState]);

  return (
    <>
      <ProgressSvg
        width={width}
        height={height}
        circleStrokeDasharray={`${circumferenceState} ${circumferenceState}`}
        circleStrokeDashoffset={offsetState}
      >
        <path
          stroke={trailColor}
          d={pathD}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          ref={svgCircleRef}
          stroke={pathColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={circleRadius}
          cx={cx}
          cy={cy}
        />
      </ProgressSvg>
    </>
  );
};

export default WorkStagesProgress;
