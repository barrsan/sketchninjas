import { memo } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import { useCursorFollower } from '@/hooks/useCursorFollower';
import { colors } from '@/constants';

interface IMenuLink {
  path: string;
  label: string;
}
const NavList = styled.ul`
  display: flex;

  ${down('sm')} {
    flex-direction: column;
  }
`;

const NavListItem = styled.li`
  margin: 0 30px;

  ${down('sm')} {
    margin-bottom: 12px;
  }
`;

const NavLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: ${colors.BLACK};
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;

  &:hover {
    color: ${colors.MAJORELLE_BLUE};
  }

  ${down('sm')} {
    font-size: 32px;
    font-weight: 900;
  }
`;

const NavigationMenu = () => {
  const { setCursorSize, setCursorType } = useCursorFollower();

  const { t } = useTranslation();
  const tWorks = t('common:works');
  const tBlog = t('common:blog');

  const menuLinks: IMenuLink[] = [
    {
      path: '/works',
      label: tWorks,
    },
    {
      path: '/blog',
      label: tBlog,
    },
  ];

  const handleMouseMove = () => {
    setCursorType('baseLink');
    setCursorSize(50);
  };

  const handleMouseLeave = () => {
    setCursorSize(10);
    setCursorType('default');
  };

  return (
    <nav>
      <NavList>
        {menuLinks.map((i) => (
          <NavListItem key={i.path}>
            <Link href={i.path} passHref>
              <NavLink
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {i.label}
              </NavLink>
            </Link>
          </NavListItem>
        ))}
      </NavList>
    </nav>
  );
};

export default memo(NavigationMenu);
