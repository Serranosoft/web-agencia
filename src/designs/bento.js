import Container from "@/components/content/container";
import Text from "@/components/content/text";
import Link from "next/link";
import styles from "@/styles/designs/bento.module.scss";

export default function Bento() {
    return (
        <Container large className={styles.root}>
            <div className={styles.bentoContainer}>
                
                {/* Caja 1: Experiencia (Cuadrada pequeña) */}
                <div className={`${styles.bentoBox} ${styles.box1}`}>
                    <div className={styles.glow} style={{ background: 'radial-gradient(circle at 0% 0%, rgba(255, 184, 0, 0.15), transparent 70%)' }} />
                    <div className={styles.boxContent}>
                        <h3 className={styles.gradientText}>10+</h3>
                        <p>años elevando el diseño e<br/>interacción web mundial</p>
                    </div>
                </div>

                {/* Caja 2: Filosofía (Rectangular ancha) */}
                <div className={`${styles.bentoBox} ${styles.box2}`}>
                    <div className={styles.glow} style={{ background: 'radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.05), transparent 70%)' }} />
                    <div className={styles.noise} />
                    <div className={styles.boxContent}>
                        <div className={styles.textContent}>
                            <h3>Diseño Artesanal</h3>
                            <p>Cada línea de código y cada pixel están meticulosamente pensados para ofrecer un rendimiento y una estética <span>premium</span> inigualables.</p>
                        </div>
                        <div className={styles.iconContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Caja 3: Proyectos (Rectangular vertical o cuadrada) */}
                <div className={`${styles.bentoBox} ${styles.box3}`}>
                    <div className={styles.glow} style={{ background: 'radial-gradient(circle at 50% 100%, rgba(255, 184, 0, 0.1), transparent 70%)' }} />
                    <div className={styles.boxContent}>
                        <div className={styles.countWrapper}>
                            <h3 className={styles.gradientText}>150+</h3>
                        </div>
                        <p>Proyectos lanzados</p>
                    </div>
                </div>

                {/* Caja 4: UI/UX (Rectangular ancha) */}
                <div className={`${styles.bentoBox} ${styles.box4}`}>
                    <div className={styles.glow} style={{ background: 'radial-gradient(circle at 100% 100%, rgba(255, 184, 0, 0.08), transparent 80%)' }} />
                    <div className={styles.boxContent}>
                        <h3>Interfaces que enamoran</h3>
                        <p>No solo creamos webs bonitas, diseñamos flujos de conversión visuales y escalables.</p>
                        <div className={styles.abstractGraphic}>
                            <div className={styles.line} />
                            <div className={styles.line} style={{ width: '70%', transitionDelay: '0.1s' }} />
                            <div className={styles.line} style={{ width: '40%', transitionDelay: '0.2s' }} />
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.actionWrapper}>
                <Link href="https://lxb7f5dwsyt.typeform.com/to/e3ayzUDn" target="_blank" className={styles.btnAction}>
                    Quiero un diseño así
                </Link>
            </div>
        </Container>
    )
}