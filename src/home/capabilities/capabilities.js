import styles from '@/styles/home/capabilities/capabilities.module.scss'
import Container from '@/components/content/container'
import H2 from '@/components/content/h2'
import Text from '@/components/content/text'
import { HiCode, HiSearch, HiChartBar } from 'react-icons/hi'

const items = [
    {
        icon: <HiCode />,
        title: "Diseño Web",
        description: "Desarrollamos páginas profesionales pensadas para transmitir confianza, mejorar la imagen de tu empresa y convertir visitas en clientes. Todas nuestras webs están optimizadas para:",
        features: ["Diseño adaptable", "Velocidad de carga", "Posicionamiento en Google", "Experiencia de usuario"]
    },
    {
        icon: <HiChartBar />,
        title: "Estrategia SEO",
        description: "Crecimiento de presencia en Google y otros buscadores mediante SEO técnico, estrategia de contenidos e investigación de palabras clave basada en datos reales.",
        features: ["Análisis de búsqueda semántica", "Investigación de competencia", "Hojas de ruta de contenido", "Dominio de SEO Local"]
    },
    {
        icon: <HiSearch />,
        title: "Marketing Digital",
        description: "Publicidad desde diferentes canales enfocados en resultados rentables. Nos centramos en las ventas y leads, no solo en el tráfico o las impresiones.",
        features: ["Gestión de Google Ads", "Seguimiento de conversiones", "Visibilidad de la marca", "Estrategias personalizadas"]
    }
]

export default function Capabilities() {
    return (
        <section className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.header}>
                    <div className={styles.titleArea}>
                        <p className={styles.badge}>AGENCIA EN CÁDIZ</p>
                        <H2 title className={styles.title}>Soluciones personalizadas para cada negocio</H2>
                    </div>
                    <div className={styles.descriptionArea}>
                        <Text className={styles.headerDescription}>Ayudamos a empresas, autónomos y negocios locales a mejorar su presencia online mediante páginas web profesionales, tiendas online y estrategias de posicionamiento SEO orientadas a captar clientes.</Text>
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
