import { useState, useEffect, memo } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { down } from 'styled-breakpoints';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import hexToRgba from 'hex-to-rgba';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { NavigationMenu } from '@/components/NavigationMenu';
import { PrimaryButton } from '@/components/Buttons';
import { Hamburger } from '@/components/Hamburger';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useViewport } from '@/hooks/useSmoothScrollViewport';
import { colors } from '@/constants';
import HeaderLogo from './HeaderLogo';

interface IStyledHeaderRootProps {
  isVisible: boolean;
}

interface IStyledMainMenuProps {
  isActive: boolean;
}

const GlobalStyle = createGlobalStyle<IStyledMainMenuProps>`
  ${({ isActive }: IStyledMainMenuProps) => {
    if (isActive) {
      return css`
        body {
          overflow: hidden;
        }
      `;
    }
    return '';
  }}
`;

const Wrapper = styled.header<IStyledHeaderRootProps>`
  position: fixed;
  z-index: 99;
  top: 40px;
  width: 100%;
  height: 72px;
  transition: all 1s;

  ${({ isVisible }: IStyledHeaderRootProps) => {
    if (!isVisible) {
      return css`
        transform: translateY(-140px);
      `;
    }
    return css`
      transform: translateY(0);
    `;
  }}

  ${down('md')} {
    top: 0;
  }
`;

const HeaderInner = styled.div`
  height: 100%;
`;

const Panel = styled(Container)`
  height: 100%;
  border-radius: 36px;
  box-shadow: 0 4px 20px 0 ${hexToRgba(colors.BLACK, 0.1)};
  background-color: ${colors.WHITE};

  ${down('md')} {
    max-width: 100%;
    border-radius: 0;
  }

  ${down('sm')} {
    padding: 0;
  }
`;

const PanelColumns = styled(Row)`
  padding: 0 15px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MainMenu = styled.div<IStyledMainMenuProps>`
  position: relative;
  z-index: 998;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  ${down('sm')} {
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    background-color: ${colors.WHITE};
    transition: all 0.3s;

    ${({ isActive }: IStyledMainMenuProps) => {
      if (isActive) {
        return css`
          transform: translateX(0);
        `;
      }
      return css`
        transform: translateX(-100vw);
      `;
    }}
  }
`;

const HamburgerWrapper = styled.div`
  position: relative;
  z-index: 999;
  display: none;
  margin-right: -15px;

  ${down('sm')} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const HireUsButtonWrapper = styled.div`
  display: block;
  margin: 0 0 0 30px;

  ${down('sm')} {
    display: none;
  }
`;

const HireUsLinkWrapper = styled.div`
  display: none;
  margin: 30px 0 0 30px;

  ${down('sm')} {
    display: block;
  }
`;

const HireUsLink = styled.a`
  font-size: 32px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: ${colors.BLUE};
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;

  &:hover {
    color: ${colors.MAJORELLE_BLUE};
  }
`;

const Header = () => {
  const [currentScrollYPos, setCurrentScrollYPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isActiveHamburger, setActiveHamburger] = useState(false);

  const { t } = useTranslation();
  const tHireUs = t('common:hireUs');

  const size = useWindowSize();

  const { scrollYPos } = useViewport();

  useEffect(() => {
    if (size.width >= 768) {
      setActiveHamburger(false);
    }
  }, [size]);

  useEffect(() => {
    if (scrollYPos <= currentScrollYPos) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setCurrentScrollYPos(scrollYPos);
  }, [scrollYPos]);

  useEffect(() => {
    if (isActiveHamburger) {
      setVisible(true);
    }
  }, [isActiveHamburger]);

  const handleHamburgerClick = () => {
    setActiveHamburger(!isActiveHamburger);
  };

  return (
    <Wrapper isVisible={visible}>
      <GlobalStyle isActive={isActiveHamburger} />
      <HeaderInner>
        <Panel>
          <PanelColumns>
            <Col xs={8} sm={8} md={6}>
              <HeaderLogo />
            </Col>
            <Col xs={4} sm={4} md={6}>
              <MainMenu isActive={isActiveHamburger}>
                <NavigationMenu />
                <HireUsButtonWrapper>
                  <PrimaryButton
                    asLink
                    href="/contacts"
                    width="197px"
                    height="40px"
                  >
                    {tHireUs}
                  </PrimaryButton>
                </HireUsButtonWrapper>
                <HireUsLinkWrapper>
                  <Link href="/contacts">
                    <HireUsLink>{tHireUs}</HireUsLink>
                  </Link>
                </HireUsLinkWrapper>
              </MainMenu>
              <HamburgerWrapper>
                <Hamburger
                  isActive={isActiveHamburger}
                  onClick={handleHamburgerClick}
                />
              </HamburgerWrapper>
            </Col>
          </PanelColumns>
        </Panel>
      </HeaderInner>
    </Wrapper>
  );
};

export default memo(Header);
