import Document, { Head, Main, NextScript } from 'next/document'
import { searchSongsUrl } from '../lib/urls';

export default class MyDocument extends Document {
  static getInitialProps (ctx) {
    return Document.getInitialProps(ctx)
  }

  render () {
    return (
      <html>
        <Head>
          <link rel="preload" href={searchSongsUrl('Marshmello')} as="fetch" crossorigin="anonymous"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
