import { FC, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { up } from 'styled-breakpoints';
import { colors } from '@/constants';

interface IProps {
  firstNumber: number;
  secondNumber: number;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Numbers = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
`;

const StyledNumberOne = styled.div`
  font-size: 200px;
  font-weight: 800;
  color: ${colors.ZIRCON};
  background-color: transparent;
  animation: ${fadeInUp} 0.3s linear;

  ${up('xl')} {
    font-size: 252px;
  }
`;

const StyledNumberTwo = styled(StyledNumberOne)`
  animation: ${fadeInDown} 0.3s linear;
`;

const StageNumber: FC<IProps> = ({ firstNumber, secondNumber }: IProps) => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
  }, [firstNumber, secondNumber]);

  useEffect(() => {
    if (!visible) {
      setFirst(firstNumber);
      setSecond(secondNumber);
      setVisible(true);
    }
  }, [visible, firstNumber, secondNumber]);

  return (
    <Numbers>
      {visible ? (
        <>
          <StyledNumberOne>{first}</StyledNumberOne>
          <StyledNumberTwo>{second}</StyledNumberTwo>
        </>
      ) : null}
    </Numbers>
  );
};

export default StageNumber;
