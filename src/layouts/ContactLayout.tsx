import useTranslation from 'next-translate/useTranslation';
import { Header } from '@/components/Header';
import { PageTitle } from '@/components/PageTitle';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const ContactLayout = () => {
  const { t } = useTranslation();
  useStopCssAnimationsOnResize();

  const tTitle = t('contacts:discussYourProject');
  const tSubtitle = t('contacts:contactsInfo');

  return (
    <>
      <Header />
      <PageSmoothScroll>
        <PageTitle title={tTitle} subtitle={tSubtitle} />
        <ContactSection disabledTitle />
      </PageSmoothScroll>
    </>
  );
};

export default ContactLayout;
