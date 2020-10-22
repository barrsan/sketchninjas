import { NextPage, GetStaticProps } from 'next';
import { WorksLayout } from '@/layouts';
import { worksApi } from '@/api';
import { IWork } from '@/types';

interface IProps {
  works: IWork[];
}

const Works: NextPage<IProps> = ({ works }: IProps) => (
  <WorksLayout works={works} />
);

export const getStaticProps: GetStaticProps = async () => {
  const works = await worksApi.getWorks(0);

  return {
    props: {
      works,
    },
  };
};

export default Works;
