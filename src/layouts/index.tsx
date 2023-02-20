import Head from 'next/head'
import { Figtree } from '@next/font/google'
const font = Figtree({ subsets: ['latin'] })

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>ChatGPT | Jesubohr</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=no'
        />
        <meta
          name='description'
          content='ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations.'
        />
      </Head>
      <div className={`${font.className} flex w:full h:100vh color:white bg:gpt-gray overflow:hidden`}>
        {children}
      </div>
    </>
  )
}
