import { memo } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import Link from 'next-translate/Link';
import { common, colors } from '@/constants';

const Logo = styled.div`
  position: relative;
  z-index: 9999;
  width: 192px;
  font-size: 20px;
  font-weight: 800;
  color: ${colors.BLACK};
`;

const LogoImage = styled.img`
  margin: 0 12px 0 0;
  display: block;
  max-width: 39px;
  width: 100%;
`;

const LogoLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: ${colors.BLACK};
  cursor: pointer;
`;

const LogoText = styled.span`
  ${down('xs')} {
    display: none;
  }
`;

const HeaderLogo = () => {
  return (
    <Logo>
      <Link href="/" passHref>
        <LogoLink>
          <LogoImage src="/assets/images/logo.png" alt={common.COMPANY} />
          <LogoText>{common.COMPANY}</LogoText>
        </LogoLink>
      </Link>
    </Logo>
  );
};

export default memo(HeaderLogo);
