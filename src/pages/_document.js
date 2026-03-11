import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div data-tf-live="01KKE8AVY3WRE05Y7AN1QF1G1E"></div>
        <Script src="//embed.typeform.com/next/embed.js" strategy="lazyOnload" />
      </body>
    </Html>
  )
}
