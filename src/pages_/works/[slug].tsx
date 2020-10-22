import { NextPage, GetStaticProps } from 'next';
import { ProjectLayout } from '@/layouts';
import { contentMarkdownToHtml } from '@/helpers/contentMarkdownToHtml';
import { worksApi } from '@/api';
import { IWorkFull } from '@/types';

interface IProps {
  work: IWorkFull;
}

const Project: NextPage<IProps> = ({ work }: IProps) => (
  <ProjectLayout work={work} />
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const work = await worksApi.getWorkBySlug(params.slug as string);
  const htmlContent = await contentMarkdownToHtml(work.content);
  work.content = htmlContent;

  return {
    props: {
      work,
    },
  };
};

export const getStaticPaths = async () => {
  const works = await worksApi.getAllWorks();

  const paths = works.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Project;
