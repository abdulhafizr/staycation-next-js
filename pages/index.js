import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {Header, Hero} from '../components'

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

      </main>

    </div>
  )
}
