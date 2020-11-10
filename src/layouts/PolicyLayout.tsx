import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { PageTitle } from '@/components/PageTitle';
import { PolicyArticle } from '@/components/PolicyArticle';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const PolicyLayout = () => {
  const { t } = useTranslation();
  useStopCssAnimationsOnResize();

  const tSeoTitle = t('seo:policy.title');
  const tSeoDescription = t('seo:policy.description');
  const tTitle = t('policy:title');

  return (
    <>
      <NextSeo title={tSeoTitle} description={tSeoDescription} />
      <Header />
      <PageSmoothScroll>
        <PageTitle title={tTitle} />
        <PolicyArticle />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
    </>
  );
};

export default PolicyLayout;
