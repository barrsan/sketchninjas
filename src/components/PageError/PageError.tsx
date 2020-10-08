import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PageTitle } from '@/components/PageTitle';
import { SecondaryButton } from '@/components/Buttons';
import { translation as t, keys } from '@/lib/i18n';
import { colors } from '@/constants';

interface IProps {
  errorCode: number;
}

const { pageErrorKeys } = keys;
const {
  OOPS,
  ERROR_CODE,
  PAGE_NOT_FOUND,
  SOMETHING_WENT_WRONG,
  BACK_HOME,
} = pageErrorKeys;

const ERROR_404_IMAGE = '/assets/images/404-error.png';
const ERROR_500_IMAGE = '/assets/images/500-error.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: ${colors.BLACK};
`;

const ButtonWrapper = styled.div`
  padding: 30px 0;
  width: 100%;
  max-width: 232px;
`;

const ErrorImageWrapper = styled.div`
  margin-bottom: 60px;
`;

const ErrorImage = styled.img`
  display: block;
  width: 100%;
  max-width: 840px;
`;

const PageError: FC<IProps> = ({ errorCode }: IProps) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const tTitle = t(OOPS, currentLanguage);
  const tSubtitle = t(ERROR_CODE, currentLanguage);
  const tMessage = t(
    errorCode === 404 ? PAGE_NOT_FOUND : SOMETHING_WENT_WRONG,
    currentLanguage,
  );
  const tButtonLabel = t(BACK_HOME, currentLanguage);

  const errorCodeMessage = `${tSubtitle}: ${errorCode}`;
  const imageSrc = errorCode === 404 ? ERROR_404_IMAGE : ERROR_500_IMAGE;

  useEffect(() => {
    // @ts-ignore
    const userLang = navigator.language || navigator.userLanguage;
    setCurrentLanguage(userLang);
  }, []);

  return (
    <Wrapper>
      <div>
        <PageTitle title={tTitle} subtitle={errorCodeMessage} isErrorPage />
        <Main>
          <ErrorImageWrapper>
            <ErrorImage src={imageSrc} alt={errorCodeMessage} />
          </ErrorImageWrapper>
          <Message>{tMessage}</Message>
          <ButtonWrapper>
            <SecondaryButton block asLink href="/">
              {tButtonLabel}
            </SecondaryButton>
          </ButtonWrapper>
        </Main>
      </div>
    </Wrapper>
  );
};

export default PageError;
