import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { NextSeo } from 'next-seo';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <NextSeo
            title="Next.js TypeScript Starter Kit"
            description="NextJS with TypeScript, Tailwind CSS, styled-components and SEO starter kit, template."
            openGraph={{
              type: 'website',
              locale: 'en_US',
              url: '',
              title: 'Next.js TypeScript Starter Kit',
              description: 'NextJS with TypeScript, Tailwind CSS, styled-components and SEO starter kit, template.',
              site_name: 'SiteName',
            }}
            twitter={{
              handle: '@alexi_be3',
              cardType: 'summary_large_image',
            }}
          />

          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
