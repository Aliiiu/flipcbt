// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html id='mainHtml'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}