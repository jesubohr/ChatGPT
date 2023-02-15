import DOC, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import Script from 'next/script'
import { render } from '@master/css/render'
import { StyleSheet } from '@master/css'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Open Graph */}
        <meta property='og:title' content='ChatGPT | Jesubohr' />
        <meta name='og:description' content='ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations.' />
        <meta property='og:image' content='https://openai.com/content/images/2022/11/ChatGPT.jpg' />

        {/* Twitter */}
        <meta name='twitter:title' content='ChatGPT | Jesubohr' />
        <meta name='twitter:description' content='ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations.' />
        <meta name='twitter:creator' content='@Jesubohr' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content='https://openai.com/content/images/2022/11/ChatGPT.jpg' />

        <Script id='master-css'>
          window.MasterCSSManual = true
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const { css } = render((await ctx.renderPage()).html, { StyleSheet })
  const initialProps = await DOC.getInitialProps(ctx)
  return {
    ...initialProps,
    styles: (
      <>
        <style id='master-css'>{css}</style>
        {initialProps.styles}
      </>
    )
  }
}
