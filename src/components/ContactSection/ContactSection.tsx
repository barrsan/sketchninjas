import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { SectionTitle } from '@/components/SectionTitle';
import { Contacts } from '@/components/Contacts';
import { ContactForm } from '@/components/ContactForm';
import { Copyright } from '@/components/Copyright';
import { colors } from '@/constants';

interface IProps {
  disabledTitle?: boolean;
}

interface IWrapperProps {
  disabledTitle: boolean;
}

const Wrapper = styled.section<IWrapperProps>`
  background-color: ${colors.GHOST_WHITE};

  ${({ disabledTitle }: IWrapperProps) => {
    if (disabledTitle) {
      return css`
        padding: 60px 0 100px 0;
      `;
    }
    return css`
      padding: 100px 0;
    `;
  }}

  ${down('sm')} {
    padding-top: 30px;
    padding-bottom: 0;
    background-color: ${colors.WHITE};
  }
`;

const SectionTitleWrapper = styled.div`
  padding: 0 0 72px 0;
  text-align: center;
`;

const ContactsMain = styled(Container)`
  ${down('sm')} {
    max-width: 100%;
  }
`;

const ContactsColumn = styled(Col)`
  display: flex;
  flex-direction: column;

  ${down('sm')} {
    padding-bottom: 50px;
    background-color: ${colors.EMINENCE};
    a,
    svg,
    div,
    span,
    h3,
    p {
      color: ${colors.WHITE};
      fill: ${colors.WHITE};
    }

    a:hover {
      color: ${colors.PALE_ROBIN_EGG_BLUE};
      & svg {
        fill: ${colors.PALE_ROBIN_EGG_BLUE};
      }
    }
  }
`;

const ContactSection: FC<IProps> = ({ disabledTitle = false }: IProps) => {
  const { t } = useTranslation();
  const tDiscussYourProject = t('contacts:discussYourProject');

  return (
    <Wrapper disabledTitle={disabledTitle}>
      {!disabledTitle ? (
        <Container>
          <SectionTitleWrapper>
            <SectionTitle>{tDiscussYourProject}</SectionTitle>
          </SectionTitleWrapper>
        </Container>
      ) : null}
      <ContactsMain>
        <Row>
          <ContactsColumn
            sm={12}
            md={4}
            xsOrder="last"
            smOrder="last"
            mdOrder="first"
          >
            <Contacts />
            <Copyright />
          </ContactsColumn>
          <Col sm={12} md={8} xsOrder="first" smOrder="first" mdOrder="last">
            <ContactForm />
          </Col>
        </Row>
      </ContactsMain>
    </Wrapper>
  );
};

export default ContactSection;
