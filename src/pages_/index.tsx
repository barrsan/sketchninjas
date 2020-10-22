import { NextPage } from 'next';
import { HomeLayout } from '@/layouts';
import { worksApi } from '@/api';
import { IWork } from '@/types';

interface IProps {
  works: IWork[];
}

const Home: NextPage<IProps> = ({ works }: IProps) => (
  <HomeLayout works={works} />
);

export async function getStaticProps() {
  const works = await worksApi.getWorksHomepage();

  return {
    props: {
      works,
    },
  };
}

export default Home;
