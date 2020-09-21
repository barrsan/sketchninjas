import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { BaseCSS } from 'styled-bootstrap-grid';
import { SmoothScrollViewportContextProvider } from '@/context/SmoothScrollViewportContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import '@/styles/app.css';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';

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

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <BaseCSS />
    <ThemeProvider theme={theme}>
      <SmoothScrollViewportContextProvider>
        <Component {...pageProps} />
      </SmoothScrollViewportContextProvider>
    </ThemeProvider>
  </>
);

export default App;
