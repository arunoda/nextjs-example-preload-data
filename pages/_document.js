import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps (ctx) {
    return Document.getInitialProps(ctx)
  }

  render () {
    return (
      <html>
        <Head>
          <link rel="preload" href="/api/search-music" as="fetch" crossorigin="anonymous"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
