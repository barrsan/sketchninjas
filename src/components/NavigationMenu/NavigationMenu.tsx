import { memo } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import { colors, common } from '@/constants';

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

const { CURSOR_FOCUS_CLASS_NAME } = common;

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

  return (
    <nav>
      <NavList>
        {menuLinks.map((i) => (
          <NavListItem key={i.path}>
            <Link href={i.path} passHref>
              <NavLink data-cursor={CURSOR_FOCUS_CLASS_NAME}>{i.label}</NavLink>
            </Link>
          </NavListItem>
        ))}
      </NavList>
    </nav>
  );
};

export default memo(NavigationMenu);
