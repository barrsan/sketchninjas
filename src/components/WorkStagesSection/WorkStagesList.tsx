import styled, { css } from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import { SvgPartners, SvgRocket, SvgCode, SvgPalette } from '@/components/Svg';
import { colors } from '@/constants';
import WorkStageInfo from './WorkStageInfo';

interface IWorksStageProps {
  last?: boolean;
}

const WorkStage = styled.div<IWorksStageProps>`
  margin: 0 auto;
  text-align: center;

  ${({ last = false }: IWorksStageProps) => {
    if (!last) {
      return css`
        &::after {
          margin: 30px 0;
          content: '';
          display: inline-block;
          height: 80px;
          border-left: 3px solid ${colors.BLUE_MOON};
          border-radius: 5px;
        }
      `;
    }

    return '';
  }}
`;

const WorkStagesList = () => {
  const { t } = useTranslation();

  const tStageTitle1 = t('works:stages.stage1.title');
  const tStageTitle2 = t('works:stages.stage2.title');
  const tStageTitle3 = t('works:stages.stage3.title');
  const tStageTitle4 = t('works:stages.stage4.title');

  const tStageDescription1 = t('works:stages.stage1.description');
  const tStageDescription2 = t('works:stages.stage2.description');
  const tStageDescription3 = t('works:stages.stage3.description');
  const tStageDescription4 = t('works:stages.stage4.description');

  return (
    <div>
      <WorkStage>
        <WorkStageInfo
          title={tStageTitle1}
          description={tStageDescription1}
          icon={<SvgPartners fill={colors.WHITE} height={50} />}
        />
      </WorkStage>
      <WorkStage>
        <WorkStageInfo
          title={tStageTitle2}
          description={tStageDescription2}
          icon={<SvgPalette fill={colors.WHITE} height={50} />}
        />
      </WorkStage>
      <WorkStage>
        <WorkStageInfo
          title={tStageTitle3}
          description={tStageDescription3}
          icon={<SvgCode fill={colors.WHITE} height={50} />}
        />
      </WorkStage>
      <WorkStage last>
        <WorkStageInfo
          title={tStageTitle4}
          description={tStageDescription4}
          icon={<SvgRocket fill={colors.WHITE} height={50} />}
        />
      </WorkStage>
    </div>
  );
};

export default WorkStagesList;
