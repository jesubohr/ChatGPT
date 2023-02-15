import type { AppProps } from 'next/app'
import '@master/css'
import '@/styles/globals.css'
import '@/styles/master.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
