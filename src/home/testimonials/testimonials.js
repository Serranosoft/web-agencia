import styles from '@/styles/home/testimonials/testimonials.module.scss'
import Container from '@/components/content/container'
import H2 from '@/components/content/h2'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
    {
        quote: "tuwebencadiz.es transformó nuestra presencia online por completo. Nuestra tasa de conversión se triplicó en los primeros tres meses tras el lanzamiento de la nueva plataforma.",
        author: "Sarah Jenkins",
        position: "CEO, Global Retail Solutions"
    },
    {
        quote: "La estrategia SEO que implementaron fue un rotundo éxito para nosotros. Ahora estamos en el primer puesto para todas nuestras palabras clave principales.",
        author: "Marcus Thorne",
        position: "Director de Marketing, TechFlow SaaS"
    },
    {
        quote: "Profesionales, orientados a datos y con una respuesta increíble. No solo construyeron una página web; crearon un motor de ingresos real para nuestro negocio.",
        author: "Elena Rodriguez",
        position: "Fundadora, Horizon Venture Group"
    }
]

export default function Testimonials() {
    return (
        <section className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.header}>
                    <p className={styles.badge}>TESTIMONIALS</p>
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
