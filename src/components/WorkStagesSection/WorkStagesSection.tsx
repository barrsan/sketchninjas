import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import { Container } from 'styled-bootstrap-grid';
import hexToRgba from 'hex-to-rgba';
import { SectionTitle } from '@/components/SectionTitle';
import { WorkStages } from '@/components/WorkStages';
import { SectionSubtitle } from '@/components/shared/common';
import { colors } from '@/constants';

const Wrapper = styled.section`
  padding: 100px 0;
  background-color: ${hexToRgba(colors.SAIL, 0.1)};
`;

const SectionTitleWrapper = styled.div`
  padding: 0 0 76px 0;
  text-align: center;
`;

const WorkStagesSection = () => {
  const { t } = useTranslation();
  const tWorkStages = t('works:workStages');
  const tWorkStagesSubtitle = t('works:workStagesSubtitle');

  return (
    <Wrapper>
      <Container>
        <SectionTitleWrapper>
          <SectionTitle>{tWorkStages}</SectionTitle>
          <SectionSubtitle centered>{tWorkStagesSubtitle}</SectionSubtitle>
        </SectionTitleWrapper>
        <WorkStages />
      </Container>
    </Wrapper>
  );
};

export default WorkStagesSection;
