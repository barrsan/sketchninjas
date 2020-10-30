import { FC } from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import { colors } from '@/constants';
import { ISvgProps } from '@/types';

interface IProps {
  title: string;
  description: string;
  color: string;
  IconComponent: FC<ISvgProps>;
  iconHeight: number;
}

interface IStyledBadgeProps {
  color: string;
}

const Wrapper = styled.div`
  margin: 0 0 30px 0;
  padding: 20px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 12px 20px 0 ${hexToRgba(colors.BLACK, 0.04)};
  background-color: ${colors.WHITE};
`;

const Badge = styled.div<IStyledBadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 99%;
  background-color: ${({ color }: IStyledBadgeProps) => color};
  box-shadow: 0 6px 20px 0
    ${({ color }: IStyledBadgeProps) => hexToRgba(color, 0.4)};
`;

const Title = styled.h4`
  margin: 30px 0 14px 0;
  font-size: 22px;
  font-weight: 600;
  color: ${colors.BLACK};
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.4;
  color: ${colors.GRAY};
`;

const BenefitsItem: FC<IProps> = ({
  title,
  description,
  color,
  IconComponent,
  iconHeight,
}: IProps) => {
  return (
    <Wrapper className="benefit">
      <Badge color={color}>
        <IconComponent height={iconHeight} fill={colors.WHITE} />
      </Badge>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default BenefitsItem;
