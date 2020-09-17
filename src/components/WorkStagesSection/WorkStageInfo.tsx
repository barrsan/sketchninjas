import { FC } from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import { colors } from '@/constants';

interface IProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Wrapper = styled.div`
  max-width: 270px;
  text-align: center;
  margin: auto;
`;

const IconWrapper = styled.div`
  margin: 0 auto 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  box-shadow: 0 6px 40px 0 ${hexToRgba(colors.BLUE, 0.4)};
  background-color: ${colors.BLUE};
  border-radius: 99%;

  & svg {
    width: 40px;
  }
`;

const Title = styled.h5`
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: bold;
  color: ${colors.BLACK};
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: ${colors.GRAY};
`;

const WorkStageInfo: FC<IProps> = ({ title, description, icon }: IProps) => {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default WorkStageInfo;
