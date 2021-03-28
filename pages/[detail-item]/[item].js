import Head from 'next/head'
import {useRouter} from'next/router'
import {Navigation, Detail, Header} from'../../components'

export default function Item() {
    
    const router = useRouter()
    const route = router.query

    return (
        <div>
            <Head>
                <title>{route['detail-item']} | {route.item}</title>
            </Head>

            <Header />

            <main className="container">
                <Navigation />
                <Detail />
            </main>

        </div>
    )
}
