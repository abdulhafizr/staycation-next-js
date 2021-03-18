import Head from 'next/head'
import {useRouter} from'next/router'
import {Navigation, Header} from'../../components'

export default function Item() {
    
    const router = useRouter()
    const route = router.query

    return (
        <div>
            <Head>
                <title>{route['detail-item'].toUpperCase()} | {route.item}</title>
            </Head>

            <Header />

            <main className="container">
                <Navigation />
            </main>

        </div>
    )
}
