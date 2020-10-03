import useTranslation from 'next-translate/useTranslation';
import { Header } from '@/components/Header';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTitle } from '@/components/PageTitle';
import { WorksSection } from '@/components/WorksSection';
import { ContactSection } from '@/components/ContactSection';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const ContactLayout = () => {
  const { t } = useTranslation();
  useStopCssAnimationsOnResize();

  const tTitle = t('works:intro');
  const tSubtitle = t('works:works');

  return (
    <>
      <Header />
      <PageSmoothScroll>
        <PageTitle title={tTitle} subtitle={tSubtitle} />
        <WorksSection disabledTitle />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
    </>
  );
};

export default ContactLayout;
