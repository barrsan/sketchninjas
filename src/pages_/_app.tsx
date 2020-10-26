import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { BaseCSS } from 'styled-bootstrap-grid';
import { SmoothScrollViewportContextProvider } from '@/context/SmoothScrollViewportContext';
import { CursorFollowerContextProvider } from '@/context/CursorFollowerContext';
import { AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import '@/styles/app.css';

const theme = {
  breakpoints: {
    xs: '498px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1440px',
    xxxl: '1920px',
  },
};

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const App = ({ Component, pageProps }: AppProps) => {
  const { route } = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, maximum-scale=1" />
      </Head>
      <BaseCSS />
      <ThemeProvider theme={theme}>
        <CursorFollowerContextProvider>
          <SmoothScrollViewportContextProvider>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={route} />
            </AnimatePresence>
          </SmoothScrollViewportContextProvider>
        </CursorFollowerContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
