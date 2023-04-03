import { getCssText } from '@/lib/stitches.config';

import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}