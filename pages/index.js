import Head from 'next/head'
import {Header} from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Staycation | Forget Busy Work, Start Next Vacation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}
