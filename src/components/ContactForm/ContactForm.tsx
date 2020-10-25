import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import hexToRgba from 'hex-to-rgba';
import {
  Input,
  TextareaAutosize,
  CheckboxGroup,
  CheckboxButton,
} from '@/components/FormControls';
import { PrimaryButton } from '@/components/Buttons';
import { colors } from '@/constants';

interface IStyledFormControlWrapper {
  first?: boolean;
  last?: boolean;
}

const Form = styled.form`
  padding: 60px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 12px 20px 0 ${hexToRgba(colors.BLACK, 0.04)};
  background-color: ${colors.WHITE};

  ${down('md')} {
    padding: 40px;
  }

  ${down('sm')} {
    padding: 0 0 50px 0;
    box-shadow: none;
  }
`;

const ServicesTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.BLACK};
`;

const Services = styled.div`
  padding: 30px 0 0 0;
`;

const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  user-select: none;
`;

const ServicesListItem = styled.li`
  margin: 0 20px 20px 0;
`;

const FormControlWrapper = styled.div<IStyledFormControlWrapper>`
  margin: 14px 0;

  ${({ first = false, last = false }: IStyledFormControlWrapper) => {
    if (first) {
      return css`
        margin-top: 4px;
      `;
    }

    if (last) {
      return css`
        margin-bottom: 4px;
      `;
    }

    return css``;
  }}
`;

const SubmitButtonWrapper = styled.div`
  padding: 36px 0 16px 0;
  width: 100%;
  max-width: 200px;

  ${down('sm')} {
    margin: 0 auto;
  }
`;

const Policy = styled.p`
  width: 100%;
  max-width: 344px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.BLACK};

  ${down('sm')} {
    margin: 10px auto 0;
    text-align: center;
  }
`;

const PolicyLink = styled.a`
  color: ${colors.BLUE};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${colors.MAJORELLE_BLUE};
  }
`;

const ContactForm = () => {
  const { t } = useTranslation();

  const tServicesTitle = t('contacts:imInterestedIn');
  const tPlaceholderName = t('contacts:form.placeholder.name');
  const tPlaceholderEmail = t('contacts:form.placeholder.email');
  const tPlaceholderProjectDetails = t(
    'contacts:form.placeholder.aboutYourProject',
  );
  const tSubmit = t('contacts:form.submit');
  const tPolicy = t('contacts:form.policy.text');
  const tPolicyLink = t('contacts:form.policy.link');
  const tErrorRequired = t('contacts:form.errors.required');
  const tErrorIncorrectEmail = t('contacts:form.errors.incorrectEmail');

  const services = [
    {
      value: 'design',
      label: t('contacts:form.checkbox.design'),
      name: 'design',
    },
    {
      value: 'motion',
      label: t('contacts:form.checkbox.motion'),
      name: 'motion',
    },
    {
      value: 'coding',
      label: t('contacts:form.checkbox.coding'),
      name: 'coding',
    },
  ];

  const validationSchema = yup.object().shape({
    name: yup.string().required(tErrorRequired),
    email: yup.string().email(tErrorIncorrectEmail).required(tErrorRequired),
  });

  const { handleSubmit, register, errors, setValue, clearErrors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    register('name');
    register('email');
    register('message');
    register('interests');
  }, [register]);

  const handleFormSubmit = (v) => {
    console.log(v);
  };

  const handleInputNameFocus = () => {
    clearErrors('name');
  };

  const handleInputEmailFocus = () => {
    clearErrors('email');
  };

  const handleFieldChange = (value: string | string[], name: string) => {
    if (Array.isArray(value)) {
      setValue(name, value.join(', ').toString());
    } else {
      setValue(name, value);
    }
  };

  const renderServices = () => (
    <Services>
      <CheckboxGroup onChange={handleFieldChange} name="interests">
        {(onSelect, values) => {
          const handleSelect = (value: string) => {
            onSelect(value);
          };
          return (
            <ServicesList>
              {services.map((i) => {
                const isChecked = values.indexOf(i.value) !== -1;
                return (
                  <ServicesListItem key={i.name}>
                    <CheckboxButton
                      name={i.name}
                      value={i.value}
                      label={i.label}
                      onSelect={handleSelect}
                      checked={isChecked}
                    />
                  </ServicesListItem>
                );
              })}
            </ServicesList>
          );
        }}
      </CheckboxGroup>
    </Services>
  );

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <ServicesTitle>{tServicesTitle}</ServicesTitle>
      {renderServices()}
      <FormControlWrapper first>
        <Input
          name="name"
          placeholder={tPlaceholderName}
          onChange={handleFieldChange}
          onFocus={handleInputNameFocus}
          isError={errors.name}
          errorMessage={errors.name && errors.name.message}
        />
      </FormControlWrapper>
      <FormControlWrapper>
        <Input
          name="email"
          placeholder={tPlaceholderEmail}
          type="email"
          onChange={handleFieldChange}
          onFocus={handleInputEmailFocus}
          isError={errors.email}
          errorMessage={errors.email && errors.email.message}
        />
      </FormControlWrapper>
      <FormControlWrapper last>
        <TextareaAutosize
          name="message"
          placeholder={tPlaceholderProjectDetails}
          onChange={handleFieldChange}
        />
      </FormControlWrapper>
      <SubmitButtonWrapper>
        <PrimaryButton block type="submit">
          {tSubmit}
        </PrimaryButton>
      </SubmitButtonWrapper>
      <Policy>
        {tPolicy}{' '}
        <Link href="/policy">
          <PolicyLink>{tPolicyLink}</PolicyLink>
        </Link>
      </Policy>
    </Form>
  );
};

export default ContactForm;
