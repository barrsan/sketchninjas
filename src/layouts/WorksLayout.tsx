import { NextSeo } from 'next-seo';
import useMobileDetect from 'use-mobile-detect-hook';
import useTranslation from 'next-translate/useTranslation';
import { Header } from '@/components/Header';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTitle } from '@/components/PageTitle';
import { WorksSection } from '@/components/WorksSection';
import { ContactSection } from '@/components/ContactSection';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { CursorFollower } from '@/components/CursorFollower';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const ContactLayout = () => {
  const detectMobile = useMobileDetect();
  const { t } = useTranslation();
  useStopCssAnimationsOnResize();

  const tSEOTitle = t('seo:works.title');
  const tSEODescription = t('seo:works.description');

  const tTitle = t('works:intro');
  const tSubtitle = t('works:works');

  return (
    <>
      <NextSeo title={tSEOTitle} description={tSEODescription} />
      <Header />
      <PageSmoothScroll>
        <PageTitle title={tTitle} subtitle={tSubtitle} />
        <WorksSection disabledTitle />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
      {detectMobile.isMobile() ? null : <CursorFollower />}
    </>
  );
};

export default ContactLayout;
