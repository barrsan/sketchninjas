import { NextPage, GetStaticProps } from 'next';
import { WorksLayout } from '@/layouts';
import { worksApi } from '@/api';
import { common } from '@/constants';
import { IWork } from '@/types';

interface IProps {
  works: IWork[];
  pageCount: number;
}

const { LIMIT_WORKS } = common;

const Works: NextPage<IProps> = ({ works, pageCount }: IProps) => (
  <WorksLayout works={works} pageCount={pageCount} currentPage={1} />
);

export const getStaticProps: GetStaticProps = async () => {
  const works = await worksApi.getWorks(0);
  const allWorks = await worksApi.getAllWorks();
  const numberOfPages = Math.ceil(allWorks.length / LIMIT_WORKS);

  return {
    props: {
      works,
      pageCount: numberOfPages,
    },
  };
};

export default Works;
