import styles from '@/styles/components/footer/footer.module.scss'
import Container from '@/components/content/container'
import { FaLinkedinIn, FaXTwitter, FaBehance } from 'react-icons/fa6'

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
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn /> <span>LinkedIn</span>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter /> <span>X (Twitter)</span>
                        </a>
                        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                            <FaBehance /> <span>Behance</span>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
