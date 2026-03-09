import styles from '@/styles/home/capabilities/capabilities.module.scss'
import Container from '@/components/content/container'
import H2 from '@/components/content/h2'
import Text from '@/components/content/text'
import { HiCode, HiSearch, HiChartBar } from 'react-icons/hi'

const items = [
    {
        icon: <HiCode />,
        title: "Desarrollo Web",
        description: "Aplicaciones web personalizadas de alto rendimiento construidas con las últimas tecnologías. Optimizamos para SEO y conversión desde la primera línea de código.",
        features: ["Expertos en React / Next.js", "E-commerce Headless", "Auditorías de Rendimiento"]
    },
    {
        icon: <HiSearch />,
        title: "Estrategia SEO",
        description: "Crecimiento de autoridad de dominio mediante SEO técnico, estrategia de contenidos e investigación de palabras clave basada en datos reales.",
        features: ["Análisis de Búsqueda Semántica", "Hojas de Ruta de Contenido", "Dominio de SEO Local"]
    },
    {
        icon: <HiChartBar />,
        title: "Marketing Digital",
        description: "Campañas de alto ROI enfocadas en resultados comerciales medibles. Nos centramos en las ventas y leads, no solo en el tráfico o las impresiones.",
        features: ["Gestión de Google Ads", "Retargeting en Meta", "Seguimiento de Conversiones"]
    }
]

export default function Capabilities() {
    return (
        <section className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.header}>
                    <div className={styles.titleArea}>
                        <p className={styles.badge}>CAPABILITIES</p>
                        <H2 title className={styles.title}>Soluciones a medida para escala empresarial.</H2>
                    </div>
                    <div className={styles.descriptionArea}>
                        <Text className={styles.headerDescription}> Combinamos la excelencia técnica con la psicología del marketing para ofrecer resultados comerciales tangibles y escalables.</Text>
                    </div>
                </div>
                
                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                            <ul className={styles.featureList}>
                                {item.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <span className={styles.dot}></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
