import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import Link from 'next-translate/Link';
import { colors } from '@/constants';

interface IProps {
  children: ReactNode;
  block?: boolean;
  width?: string;
  height?: string;
  type?: 'button' | 'reset' | 'submit';
  asLink?: boolean;
  href?: string;
  onClick?: () => void;
}

interface IStyledButtonProps {
  width: string;
  height: string;
  block: boolean;
}

const Inner = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  background-color: ${colors.BLUE};
  border-radius: 22px;
  transition: all 0.3s;
`;

const commonCSS = css`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.WHITE};
  border: 0;
  background-color: ${colors.BLUE};
  border-radius: 22px;
  box-shadow: 0 4px 14px 0 ${hexToRgba(colors.BLUE, 0.4)};
  user-select: none;

  &:hover > ${Inner} {
    box-shadow: inset 0 -3.25em 0 0 ${colors.MAJORELLE_BLUE};
  }
`;

const Button = styled.button<IStyledButtonProps>`
  width: ${({ width, block }: IStyledButtonProps) => (block ? '100%' : width)};
  height: ${({ height }: IStyledButtonProps) => height};
  ${() => commonCSS}
`;

const ButtonLink = styled.a<IStyledButtonProps>`
  display: block;
  width: ${({ width, block }: IStyledButtonProps) => (block ? '100%' : width)};
  height: ${({ height }: IStyledButtonProps) => height};
  text-decoration: none;
  ${() => commonCSS}
`;

const PrimaryButton: FC<IProps> = ({
  children,
  width = 'auto',
  height = '44px',
  type = 'button',
  block = false,
  href = '',
  asLink = false,
  onClick = () => {},
}: IProps) => {
  return asLink ? (
    <Link href={href} passHref>
      <ButtonLink block={block} width={width} height={height}>
        <Inner>{children}</Inner>
      </ButtonLink>
    </Link>
  ) : (
    <Button
      block={block}
      width={width}
      height={height}
      onClick={onClick}
      type={type}
    >
      <Inner>{children}</Inner>
    </Button>
  );
};

export default PrimaryButton;
