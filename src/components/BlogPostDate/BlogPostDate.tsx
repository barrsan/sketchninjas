import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import moment from 'moment';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import { colors } from '@/constants';

interface IProps {
  publicationDate: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  width: 70px;
  height: 70px;
  color: ${colors.WHITE};
  background-color: ${colors.BLUE};
  border-radius: 100%;
  box-shadow: 0 6px 40px 0 ${hexToRgba(colors.BLUE, 0.4)};
  pointer-events: none;
`;

const Month = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2.2px;
  color: ${colors.WHITE};
`;

const Day = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.WHITE};
`;

const BlogPostDate: FC<IProps> = ({ publicationDate }: IProps) => {
  const { lang } = useTranslation();
  moment.locale(lang);

  const month = moment(publicationDate)
    .format('MMM')
    .replace(new RegExp(/\./, 'g'), '')
    .slice(0, 3);
  const day = moment(publicationDate).format('DD');

  return (
    <Wrapper>
      <Month>{month}</Month>
      <Day>{day}</Day>
    </Wrapper>
  );
};

export default BlogPostDate;
