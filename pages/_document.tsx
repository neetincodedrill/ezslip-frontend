
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Racing+Sans+One&family=Inter:wght@500&display=swap" rel="stylesheet" />
   
{/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">  */}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <div id="main_model"></div> */}
      </body>
    </Html>
  )
}