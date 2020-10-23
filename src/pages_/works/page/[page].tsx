import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { WorksLayout } from '@/layouts';
import { worksApi } from '@/api';
import { common } from '@/constants';
import { IWork } from '@/types';

interface IProps {
  works: IWork[];
  pageCount: number;
  currentPage: number;
}

const { LIMIT_WORKS } = common;

const AllWorks: NextPage<IProps> = ({
  works,
  pageCount,
  currentPage,
}: IProps) => (
  <WorksLayout works={works} pageCount={pageCount} currentPage={currentPage} />
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPage = params?.page as string;
  const currentPageNumber = +(currentPage || 0);

  const start = (currentPageNumber - 1) * LIMIT_WORKS;

  const works = await worksApi.getWorks(start);
  const allWorks = await worksApi.getAllWorkSlugs();
  const numberOfPages = Math.ceil(allWorks.length / LIMIT_WORKS);

  return {
    props: {
      works,
      currentPage: currentPageNumber,
      pageCount: numberOfPages,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const works = await worksApi.getAllWorkSlugs();
  const numberOfPages = Math.ceil(works.length / LIMIT_WORKS);

  const paths = Array(numberOfPages)
    .fill('')
    .map((i, index) => {
      return {
        params: {
          page: (index + 1).toString(),
        },
      };
    });

  return {
    paths,
    fallback: false,
  };
};

export default AllWorks;
