import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '@/lib/gtag'
import Analytics from '@/components/Analytics'

const font = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>
          Orçamento simplificado, crie um orçamento simples e rapido
        </title>
        <meta
          name="description"
          content="Crie e envie modelo de orçamento para seu cliente de forma rapida e pratica, recebendo pagamento em alguns cliques."
        />
        <meta name="ahrefs-site-verification" content="0ff7ff9de03f88bcd24fe4511f725298dc7d90f3c915636975575d8b463daf90"></meta>
        <meta name="google-site-verification" content="u5_Q-zBHGVK6bNT5-QHCHY48fxC-IoqAxYo-H2BLhJQ" />
      </Head>
      <main className={`${font.className} container mx-auto px-8 py-20 text-center flex flex-col gap-8`}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  )
}
