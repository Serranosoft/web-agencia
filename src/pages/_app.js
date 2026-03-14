import Header from '@/components/header/header'
import '../styles/globals.css'
import '@/styles/aos/aos.scss'
import Aos from '@/components/aos/aos'
import { Nunito_Sans } from 'next/font/google'
import styles from "@/styles/app.module.scss";
import { useRouter } from 'next/router'
import Head from 'next/head'

const arimo = Nunito_Sans({ subsets: ['latin'], weight: "400" })

export default function App({ Component, pageProps }) {


    const route = useRouter();

    return (
        <>
            <Head>
                <meta property="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg" />
                <meta property="og:type" content="website"></meta>
                <link rel="icon" href="/favicon.ico" />
                {/* <meta name="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta> */}
            </Head>
            <Aos />
            <section className={arimo.className}>
                <Header />
                <main className={`${route.pathname.split('/')[1] === "blog" && styles.light} ${styles.root}`}>
                    <Component {...pageProps} />
                </main>
            </section>
        </>
    )
}
