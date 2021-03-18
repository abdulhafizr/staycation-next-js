import Head from 'next/head'
import {Header, Hero, House, MostPick} from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Staycation | Forget Busy Work, Start Next Vacation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container">
        <Hero />
        <MostPick />
        <House />
      </main>

    </div>
  )
}
