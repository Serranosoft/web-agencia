import styles from '@/styles/components/footer/footer.module.scss'
import Container from '@/components/content/container'
import { FaLinkedinIn } from 'react-icons/fa6'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.root}>
            <Container large={true}>
                <div className={styles.wrapper}>
                    <div className={styles.brand}>
                        <img src="/logo.png" alt="tuwebencadiz.es" className={styles.logo} />
                    </div>
                    
                    <div className={styles.copyright}>
                        <p>© {currentYear} tuwebencadiz.es Agency. Todos los derechos reservados. Diseñado para el rendimiento.</p>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://www.linkedin.com/in/paula-quintana-36856b204/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn /> <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
