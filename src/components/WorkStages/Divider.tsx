import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import { colors } from '@/constants';

const Wrapper = styled.div`
  padding: 80px 0;
`;

const Dot = styled.div`
  margin: 40px auto;
  width: 10px;
  height: 10px;
  background-color: ${hexToRgba(colors.SAIL, 0.5)};
  border-radius: 99%;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Divider = () => {
  return (
    <Wrapper>
      <Dot />
      <Dot />
      <Dot />
    </Wrapper>
  );
};

export default Divider;
