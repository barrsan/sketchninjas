import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
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

const commonCSS = css`
  position: relative;
  overflow: hidden;
  padding: 0 24px;
  font-size: 18px;
  font-weight: 400;
  color: ${colors.BLUE};
  border: 1px solid ${colors.BLUE};
  background-color: transparent;
  border-radius: 22px;
  user-select: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${colors.WHITE};
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

const Inner = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SecondaryButton: FC<IProps> = ({
  children,
  width = 'auto',
  height = '44px',
  type = 'button',
  href = '',
  block = false,
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

export default SecondaryButton;
