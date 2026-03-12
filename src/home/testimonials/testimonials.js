import styles from '@/styles/home/testimonials/testimonials.module.scss'
import Container from '@/components/content/container'
import H2 from '@/components/content/h2'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
    {
        quote: "Trabajar con Paula y Manuel fue muy sencillo. Nos ayudaron a avanzar como negocio con una página web totalmente nueva. El diseño ha quedado muy bien y tener la carta digital nos facilita el trabajo",
        author: "Pablo Álvarez",
        position: "Restaurante"
    },
    {
        quote: "No manteníamos la página desde que se hizo con el kit digital, los clientes no la utilizaban. Decidimos darle una oportunidad a esta agencia y trabajamos con algunas ideas. El resultado quedó magnifico y pudimos añadir por fin nuestros propios test integrados.",
        author: "Marcos Ruíz",
        position: "Autoescuela"
    },
    {
        quote: "Estoy encantada con la nueva página y con la aplicación que me hicieron. Necesitaba una página completa que me ayudara a organizarme y a explicar mejor nuestro centro. Trabajaremos de nuevo con ellos si necesitamos cambiar alguna cosa!",
        author: "Elena Rodríguez",
        position: "Centro integral (Fisioterapia, Logopeda y Psicología)"
    }
]

export default function Testimonials() {
    return (
        <section className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.header}>
                    <p className={styles.badge}>TESTIMONIOS</p>
                    <H2 title className={styles.title}>Lo que dicen nuestros clientes</H2>
                </div>
                
                <div className={styles.grid}>
                    {testimonials.map((t, index) => (
                        <div key={index} className={styles.card}>
                            <FaQuoteLeft className={styles.quoteIcon} />
                            <p className={styles.quoteText}>{t.quote}</p>
                            <div className={styles.footer}>
                                <p className={styles.author}>{t.author}</p>
                                <p className={styles.position}>{t.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
