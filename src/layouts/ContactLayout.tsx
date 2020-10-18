import { NextSeo } from 'next-seo';
import useMobileDetect from 'use-mobile-detect-hook';
import useTranslation from 'next-translate/useTranslation';
import { Header } from '@/components/Header';
import { PageTitle } from '@/components/PageTitle';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { CursorFollower } from '@/components/CursorFollower';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const ContactLayout = () => {
  const { t } = useTranslation();
  const detectMobile = useMobileDetect();
  useStopCssAnimationsOnResize();

  const tSeoTitle = t('seo:contact.title');
  const tSeoDescription = t('seo:contact.description');

  const tTitle = t('contacts:discussYourProject');
  const tSubtitle = t('contacts:contactsInfo');

  return (
    <>
      <NextSeo title={tSeoTitle} description={tSeoDescription} />
      <Header />
      <PageSmoothScroll>
        <PageTitle title={tTitle} subtitle={tSubtitle} />
        <ContactSection disabledTitle />
      </PageSmoothScroll>
      <PageTransitionMask />
      {detectMobile.isMobile() ? null : <CursorFollower />}
    </>
  );
};

export default ContactLayout;
