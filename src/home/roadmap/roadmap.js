import styles from '@/styles/home/roadmap/roadmap.module.scss'
import Container from '@/components/content/container'
import H2 from '@/components/content/h2'
import { HiSearch, HiLightBulb, HiChip, HiTrendingUp } from 'react-icons/hi'

const steps = [
    {
        number: "01",
        title: "Descubrimiento",
        description: "Profundizamos en tus objetivos de negocio, público objetivo y competencia para trazar una ruta clara y personalizada.",
        icon: <HiSearch />
    },
    {
        number: "02",
        title: "Estrategia",
        description: "Desarrollamos un plan detallado centrado en la arquitectura de usuario, la conversión y la usabilidad para maximizar el impacto.",
        icon: <HiLightBulb />
    },
    {
        number: "03",
        title: "Desarrollo",
        description: "Ejecución técnica de alto rendimiento utilizando las tecnologías web más robustas y escalables para una experiencia impecable.",
        icon: <HiChip />
    },
    {
        number: "04",
        title: "Crecimiento",
        description: "Optimización continua y escalado de tu presencia digital para asegurar un crecimiento constante y resultados sostenibles.",
        icon: <HiTrendingUp />
    }
]

export default function Roadmap() {
    return (
        <section className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.header}>
                    <p className={styles.badge}>WORKFLOW</p>
                    <H2 title className={styles.title}>Nuestra Hoja de Ruta al Éxito</H2>
                </div>
                
                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.iconWrapper}>
                                {step.icon}
                            </div>
                            <h3 className={styles.stepTitle}>
                                <span className={styles.number}>{step.number}.</span> {step.title}
                            </h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
