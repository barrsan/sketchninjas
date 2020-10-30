import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { colors, common } from '@/constants';

const Wrapper = styled.div`
  margin: auto 0 0 0;
  padding: 0 40px 0 0;
`;

const CopyrightText = styled.p`
  margin: 0 0 25px 0;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.GRAY};
`;

const CopyrightCompany = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.BLACK};
`;

const Copyright = () => {
  const { t } = useTranslation();

  const tCopy = t('common:copyright');

  const date = new Date();
  const year = date.getFullYear();

  return (
    <Wrapper>
      <CopyrightText>{tCopy}</CopyrightText>
      <CopyrightCompany>{`© ${common.COMPANY} ${year}`}</CopyrightCompany>
    </Wrapper>
  );
};

export default Copyright;
