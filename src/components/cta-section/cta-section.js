import Link from 'next/link'
import styles from './cta-section.module.scss'
import Container from '@/components/content/container'

/**
 * Reusable CTA section with gold background box.
 *
 * Props:
 *   title    - Heading text (required)
 *   desc     - Paragraph text (required)
 *   btnText  - Button label (default: "Saber más")
 *   btnHref  - Button link   (default: "/contacto")
 */
export default function CtaSection({
    title,
    desc,
    btnText = 'Saber más',
    btnHref = '/contacto',
}) {
    return (
        <section className={styles.wrapper}>
            <Container large>
                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaTitle}>{title}</h2>
                    <p className={styles.ctaDesc}>{desc}</p>
                    <div className={styles.ctaButtons}>
                        <Link href={btnHref} className={styles.btnDark}>
                            {btnText}
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}
