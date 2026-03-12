import styles from '@/styles/home/capabilities/capabilities.module.scss'
import Container from '@/components/content/container'
import H2 from '@/components/content/h2'
import Text from '@/components/content/text'
import { HiCode, HiSearch, HiChartBar } from 'react-icons/hi'

const items = [
    {
        icon: <HiCode />,
        title: "Diseño web en Cádiz",
        description: "Diseñamos páginas web profesionales en Cádiz pensadas para transmitir confianza, mejorar la imagen de tu empresa y convertir visitas en clientes. Todas nuestras webs están optimizadas para:",
        features: ["móviles y tablets", "velocidad de carga", "posicionamiento en Google", "experiencia de usuario"]
    },
    {
        icon: <HiChartBar />,
        title: "Tiendas online",
        description: "Creamos tiendas online en Cádiz para que puedas vender tus productos o servicios por Internet las 24 horas del día. Diseñamos ecommerce con WooCommerce o Prestashop, integrando:",
        features: ["pagos online", "gestión de productos", "control de pedidos", "optimización SEO para ecommerce"]
    },
    {
        icon: <HiSearch />,
        title: "Posicionamiento SEO en Cádiz",
        description: "Si tu web no aparece en Google, tus clientes no te encontrarán. Aplicamos estrategias de SEO local en Cádiz para que tu negocio aparezca cuando los usuarios buscan servicios como:",
        features: ["diseño web Cádiz", "agencia marketing Cádiz", "tienda online Cádiz", "Nuestro objetivo es ganar visibilidad"]
    }
]

export default function Capabilities() {
    return (
        <section className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.header}>
                    <div className={styles.titleArea}>
                        <p className={styles.badge}>AGENCIA EN CÁDIZ</p>
                        <H2 title className={styles.title}>Somos una agencia especializada en diseño web y marketing digital.</H2>
                    </div>
                    <div className={styles.descriptionArea}>
                        <Text className={styles.headerDescription}>Ayudamos a empresas, autónomos y negocios locales a mejorar su presencia online mediante páginas web profesionales, tiendas online y estrategias de posicionamiento SEO orientadas a captar clientes.</Text>
                        <Text className={styles.headerDescription} style={{ marginTop: '1rem' }}>Trabajamos con empresas de toda la provincia de Cádiz: Jerez de la Frontera, El Puerto de Santa María, San Fernando, Chiclana, Puerto Real o Algeciras, ofreciendo soluciones digitales adaptadas a cada negocio.</Text>
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
