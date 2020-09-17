import { FC } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '@/constants';

interface IProps {
  isActive: boolean;
  onClick: () => void;
}
interface IStyledSvgHamburgerProps {
  isActive: boolean;
}

const SvgHamburger = styled.svg<IStyledSvgHamburgerProps>`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  user-select: none;

  ${({ isActive }: IStyledSvgHamburgerProps) => {
    if (isActive) {
      return css`
        transform: rotate(45deg);

        & .top {
          stroke-dashoffset: -64px;
        }

        & .middle {
          transform: rotate(90deg);
        }

        & .bottom {
          stroke-dashoffset: -64px;
        }
      `;
    }
    return '';
  }}

  & .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: ${colors.BLUE};
    stroke-width: 5.5;
    stroke-linecap: round;
  }

  & .top {
    stroke-dasharray: 40 160;
  }

  & .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }

  & .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
`;

const Hamburger: FC<IProps> = ({ isActive, onClick }: IProps) => {
  return (
    <SvgHamburger
      viewBox="0 0 100 100"
      width="60"
      onClick={onClick}
      isActive={isActive}
    >
      <path
        className="line top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
      />
      <path className="line middle" d="m 30,50 h 40" />
      <path
        className="line bottom"
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
      />
    </SvgHamburger>
  );
};

export default Hamburger;
