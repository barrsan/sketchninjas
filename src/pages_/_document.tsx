import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import documentLang from 'next-translate/documentLang';

const YM = `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(${process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID}, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  });
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={documentLang(this.props)}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="imagetoolbar" content="no" />
          <meta name="msthemecompatible" content="no" />
          <meta name="cleartype" content="on" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="format-detection" content="address=no" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <link
            rel="icon"
            href="/assets/favicon/favicon-32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="/assets/favicon/favicon-57.png"
            sizes="57x57"
          />
          <link
            rel="icon"
            href="/assets/favicon/favicon-76.png"
            sizes="76x76"
          />
          <link
            rel="icon"
            href="/assets/favicon/favicon-96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            href="/assets/favicon/favicon-128.png"
            sizes="128x128"
          />
          <link
            rel="icon"
            href="/assets/favicon/favicon-192.png"
            sizes="192x192"
          />
          <link
            rel="icon"
            href="/assets/favicon/favicon-228.png"
            sizes="228x228"
          />
          <link
            rel="shortcut icon"
            sizes="196x196"
            href="/assets/favicon/favicon-196.png"
          />
          <link
            rel="apple-touch-icon"
            href="/assets/favicon/favicon-120.png"
            sizes="120x120"
          />
          <link
            rel="apple-touch-icon"
            href="/assets/favicon/favicon-152.png"
            sizes="152x152"
          />
          <link
            rel="apple-touch-icon"
            href="/assets/favicon/favicon-180.png"
            sizes="180x180"
          />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-TileImage"
            content="/assets/favicon/favicon-144.png"
          />
          <meta
            name="msapplication-config"
            content="/assets/favicon/browserconfig.xml"
          />
          <script src="/scripts/smtp.js" async />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: YM }}
          />
        </body>
      </Html>
    );
  }
}
