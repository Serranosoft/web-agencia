import styles from '@/styles/home/case-studies/case-studies.module.scss'
import Container from '@/components/content/container'
import H2 from '@/components/content/h2'
import { HiArrowUpRight } from 'react-icons/hi2'

const projects = [
    {
        category: "SEO & Desarrollo web",
        title: "Diseño completo y creación de contenido",
        image: "/debocado.png"
    },
    {
        category: "Copywriting & Desarrollo web",
        title: "Diseño, branding y creación del servicio",
        image: "/humancopy.png"
    }
]

export default function CaseStudies() {
    return (
        <section className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.header}>
                    <p className={styles.badge}>CASOS DE ÉXITO</p>
                    <H2 title className={styles.title}>Probando el valor a través de resultados.</H2>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={project.image} alt={project.title} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <div>
                                    <p className={styles.category}>{project.category}</p>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                </div>
                                <div className={styles.iconWrapper}>
                                    <HiArrowUpRight />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
