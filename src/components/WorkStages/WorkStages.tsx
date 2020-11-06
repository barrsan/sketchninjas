import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from './Stage4';
import Divider from './Divider';

const Wrapper = styled.div`
  padding: 46px 0 0 0;

  ${down('md')} {
    padding-top: 0;
  }
`;

const WorkStages = () => {
  return (
    <Wrapper>
      <Stage1 />
      <Divider />
      <Stage2 />
      <Divider />
      <Stage3 />
      <Divider />
      <Stage4 />
    </Wrapper>
  );
};

export default WorkStages;
