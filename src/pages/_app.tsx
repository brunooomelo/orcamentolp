import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useEffect } from 'react'
import ReactGA from 'react-ga'

const font = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string)
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <>
      <Head>
        <title>
          Orçamento simplificado, crie um orçamento simples e rapido
        </title>
        <meta
          name="description"
          content="Crie e envie modelo de orçamento para seu cliente de forma rapida e pratica"
        />
      </Head>
      <main className={`${font.className} container mx-auto px-8 py-20 text-center flex flex-col gap-8`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
