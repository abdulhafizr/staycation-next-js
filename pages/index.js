import {useEffect, useState} from 'react'
import Head from 'next/head'
import {Header, Hero, List, MostPick, Testimonial, Footer} from '../components'

export default function Home() {
  
  const [homeData, setHomeData] = useState({})

  useEffect(() => {
    fetch('https://staycation-next-js-bqwjvq03p-abdulhafizr.vercel.app/api')
      .then((response) => response.json())
      .then((response) => setHomeData(response.data))
  }, [])

  return (
    <div>
      <Head>
        <title>Staycation | Forget Busy Work, Start Next Vacation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container">
        <Hero 
          travelers={homeData.travelers}
          treasure={homeData.treasure}
          cities={homeData.cities}
        />
        <MostPick 
          mostPicked={homeData.mostPicked}
        />

        {/* Houses */}
        <List 
          title="Houses with beauty backyard"
          data={homeData.houses}
        />
        {/* Hotels */}
        <List 
          title="Hotels with large living room"
          data={homeData.hotels}
        />
        {/* Apartments */}
        <List 
          title="Apartments with kitchen set"
          data={homeData.apartments}
        />

        <Testimonial 
          testimonial={homeData.testimonial}
        />
      </main>

      <Footer />

    </div>
  )
}
