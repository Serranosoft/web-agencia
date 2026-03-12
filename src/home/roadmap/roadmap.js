import styles from '@/styles/home/roadmap/roadmap.module.scss'
import Container from '@/components/content/container'
import H2 from '@/components/content/h2'
import Text from '@/components/content/text'
import { HiDesktopComputer, HiSearch, HiDeviceMobile, HiLightningBolt, HiSupport, HiChartPie } from 'react-icons/hi'

const steps = [
    {
        number: "01",
        title: "Diseño web profesional adaptado a tu negocio",
        description: "Desarrollamos una presencia online única y a medida que refleje la esencia de tu empresa.",
        icon: <HiDesktopComputer />
    },
    {
        number: "02",
        title: "Webs optimizadas para Google",
        description: "Desde el primer día construimos tu web siguiendo las mejores prácticas para un óptimo posicionamiento SEO.",
        icon: <HiSearch />
    },
    {
        number: "03",
        title: "Diseño responsive (móviles y tablets)",
        description: "Experiencia de usuario perfecta en cualquier dispositivo para que no pierdas ningún cliente potencial.",
        icon: <HiDeviceMobile />
    },
    {
        number: "04",
        title: "Desarrollo rápido y escalable",
        description: "Utilizamos la mejor tecnología para asegurar un código robusto preparado para crecer junto a tu negocio.",
        icon: <HiLightningBolt />
    },
    {
        number: "05",
        title: "Soporte y mantenimiento web",
        description: "No te dejamos solo tras el lanzamiento. Cuidamos de tu web para que siempre esté actualizada y segura.",
        icon: <HiSupport />
    },
    {
        number: "06",
        title: "Estrategias de marketing digital",
        description: "Generamos tráfico de calidad hacia tu nueva web convirtiendo a los visitantes en clientes recurrentes.",
        icon: <HiChartPie />
    }
]

export default function Roadmap() {
    return (
        <section className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.header}>
                    <p className={styles.badge}>BENEFICIOS</p>
                    <H2 title className={styles.title}>¿Por qué elegir nuestra agencia de diseño web en Cádiz?</H2>
                    <Text className={styles.description} style={{ marginTop: '1rem', opacity: 0.8, maxWidth: '800px', marginInline: 'auto' }}>
                        Elegir una agencia de desarrollo web es una decisión importante. En Tu Web en Cádiz trabajamos con un enfoque orientado a resultados. Nuestro objetivo no es solo crear una web bonita, sino crear una herramienta que genere clientes para tu negocio.
                    </Text>
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
