import Head from 'next/head'
import styles from '@/styles/home/home.module.scss'
import Hero from '@/home/hero/hero'
import Capabilities from '@/home/capabilities/capabilities'
import Testimonials from '@/home/testimonials/testimonials'
import SeoCharts from '@/home/charts/seo-charts'
import Floating from '@/components/contact/floating'
import Rocket from '@/home/rocket/rocket'
import Designs from '@/home/designs/designs'
import Faq from '@/home/faq/faq'
import Aos from '@/components/aos/aos'

export default function Home() {
    return (
        <>
            <Head>
                <title>tuwebencadiz.es — Agencia de Diseño Web & Posicionamiento SEO en Cádiz</title>
                <meta name="description" content="tuwebencadiz.es es tu agencia en Cádiz especializada en diseño web profesional, desarrollo a medida y posicionamiento SEO para impulsar tu negocio." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js" strategy='beforeInteractive' />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js" strategy='beforeInteractive' />
            </Head>

            {/* MUST SEE FOR LATER
            
                PROYECTO WEB
                https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--parallax-effect-glare-scale <-- para las imgs
                https://www.lightgalleryjs.com/demos/thumbnails/
                https://merri.github.io/react-tabbordion <-- FAQ
                https://www.npmjs.com/package/next-seo
                https://www.npmjs.com/package/next-sitemap
                https://www.npmjs.com/package/nextjs-google-analytics
                https://github.com/rcaferati/react-awesome-slider <-- full page slider ¿(Casos de exito)?

                MISCELANEA
                https://github.com/malerba118/react-particle-image <-- Particulas en una img, tengo que probarlo
                https://github.com/gilbarbara/react-joyride <-- Plataforma servicios
                https://react-icons.github.io/react-icons <-- Iconos
                https://sweetalert2.github.io/ <-- Alertas muy bonitas
                https://github.com/sgwilym/windups <-- para orientar al usuario, mola.
                https://github.com/drgx/react-thanos-snap <-- efectos snap thanos mola
                
                TIENDA
                https://github.com/amaroteam/react-credit-cards <-- Proyecto tienda
                https://react-rating.onrender.com/ <-- Rating estrellas
                https://sonner.emilkowal.ski/ <-- notificaciones fácil.
                https://express-labs.github.io/pure-react-carousel/
                
                BLOG INSPIRATION
                sendcloud webpage

            */}
            <Aos />
            <Floating />
            <Hero />
            <Capabilities />
            <SeoCharts />
            <Rocket />
            <Designs />
            <Testimonials />
            <Faq />


        </>
    )
}
