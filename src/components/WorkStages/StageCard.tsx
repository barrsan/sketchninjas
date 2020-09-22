import { FC } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import hexToRgba from 'hex-to-rgba';
import { colors } from '@/constants';
import { ISvgProps } from '@/types';

interface IProps {
  title: string;
  description: string;
  IconComponent: FC<ISvgProps>;
}

const Card = styled.div`
  padding: 30px;
  width: 100%;
  max-width: 330px;
  border-radius: 20px;
  box-shadow: 0 12px 20px 0 ${hexToRgba(colors.BLACK, 0.04)};
  background-color: ${colors.WHITE};

  ${down('xs')} {
    max-width: 300px;
  }
`;

const IconWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  box-shadow: 0 6px 40px 0 ${hexToRgba(colors.BLUE, 0.4)};
  background-color: ${colors.BLUE};
  border-radius: 99%;
`;

const TextWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Title = styled.h5`
  margin-bottom: 16px;
  font-size: 22px;
  font-weight: 600;
  color: ${colors.BLACK};
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  color: ${colors.GRAY};
`;

const StageCard: FC<IProps> = ({
  title,
  description,
  IconComponent,
}: IProps) => {
  return (
    <Card>
      <IconWrapper>
        <IconComponent width={40} fill={colors.WHITE} />
      </IconWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Card>
  );
};

export default StageCard;
