import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { Noto_Sans_ } from 'next/font/google'

// const franklin = Libre_Franklin({
//   subsets: ['latin'],
//   weight: ['300', '400', '500']

// })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
