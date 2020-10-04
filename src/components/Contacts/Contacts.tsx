import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import {
  SvgInstagram,
  SvgWhatsapp,
  SvgTelegram,
  SvgDribbble,
  SvgBehance,
} from '@/components/Svg';
import { useCursorFollower } from '@/hooks/useCursorFollower';
import { colors, contacts } from '@/constants';

const Wrapper = styled.div`
  padding: 30px 0;

  ${down('sm')} {
    padding-top: 50px;
  }
`;

const Title = styled.h3`
  display: block;
  margin: 0 0 16px 0;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${colors.BLACK};
`;

const EmailLink = styled.a`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.BLACK};
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: ${colors.MAJORELLE_BLUE};
  }
`;

const SocialContacts = styled.div`
  padding: 40px 0 0 0;
`;

const SocialLinks = styled.div`
  margin-left: -10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 260px;

  ${down('sm')} {
    width: 100%;
  }
`;

const SocialLink = styled.a`
  margin: 0 30px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  svg {
    fill: ${colors.BLACK};
    transition: all 0.3s;
  }

  &:hover {
    svg {
      fill: ${colors.MAJORELLE_BLUE};
    }
  }
`;

const socialContacts = [
  {
    name: 'instagram',
    url: contacts.INSTAGRAM,
    component: SvgInstagram,
  },
  {
    name: 'whatsapp',
    url: contacts.WHATSAPP,
    component: SvgWhatsapp,
  },
  {
    name: 'telegram',
    url: contacts.TELEGRAM,
    component: SvgTelegram,
  },
  {
    name: 'dribbble',
    url: contacts.DRIBBBLE,
    component: SvgDribbble,
  },
  {
    name: 'behance',
    url: contacts.BEHANCE,
    component: SvgBehance,
  },
];

const Contacts = () => {
  const { setCursorSize, setCursorType } = useCursorFollower();

  const { t } = useTranslation();
  const tContacts = t('contacts:contacts');
  const tFollow = t('contacts:follow');

  const handleMouseMove = () => {
    setCursorType('baseLink');
    setCursorSize(50);
  };

  const handleMouseLeave = () => {
    setCursorSize(10);
    setCursorType('default');
  };

  return (
    <Wrapper>
      <Title>{tContacts}</Title>
      <EmailLink href={`mailto:${contacts.EMAIL}`}>{contacts.EMAIL}</EmailLink>
      <SocialContacts>
        <Title>{tFollow}</Title>
        <SocialLinks>
          {socialContacts.map((i) => {
            const Icon = i.component;
            return (
              <SocialLink
                key={i.name}
                href={i.url}
                target="_blank"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <Icon width={20} height={20} />
              </SocialLink>
            );
          })}
        </SocialLinks>
      </SocialContacts>
    </Wrapper>
  );
};

export default Contacts;
