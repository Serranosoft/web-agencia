import H1 from '@/components/content/h1'
import styles from '@/styles/home/hero/hero.module.scss'
import Container from '@/components/content/container'
import Button from '@/home/button/button'
import Text from '@/components/content/text'
import { HiArrowRight, HiTrendingUp } from 'react-icons/hi'
import { useState, useEffect } from 'react'

export default function Hero() {
    const [percentage, setPercentage] = useState(50);

    useEffect(() => {
        const duration = 3500; // 3.5 seconds
        const start = 50;
        const end = 124;
        const startTime = Date.now();

        const updateCounter = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out quad function
            const easedProgress = progress * (2 - progress);
            const current = Math.floor(start + (end - start) * easedProgress);

            setPercentage(current);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    }, []);

    return (
        <section className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.root}>
                    <div className={styles.content}>
                        <div className={styles.badge}>
                            <span></span>  Especialistas en la provincia de Cádiz
                        </div>
                        <H1 kanit title className={styles.mainTitle}>
                            Diseño web y <br />
                            <span className={styles.highlight}>marketing digital</span> <br />
                            en Cádiz para empresas y autónomos
                        </H1>
                        <Text m className={styles.description}>
                            Creamos páginas web profesionales, tiendas online y estrategias de marketing digital para ayudar a empresas de Cádiz a conseguir más clientes en Internet.
                        </Text>
                        <div className={styles.ctas}>
                            <Button href="/">Lanzar Proyecto</Button>
                            <Button secondary href="/desarrollo-web">
                                Ver Nuestro Trabajo <HiArrowRight />
                            </Button>
                        </div>
                    </div>

                    <div className={styles.visual}>
                        <div className={styles.mockupContainer}>
                            <img src="/hero-mockup.png" alt="Dashboard Mockup" className={styles.mockup} />

                            <div className={styles.statsCard}>
                                <div className={styles.iconWrapper}>
                                    <HiTrendingUp />
                                </div>
                                <div>
                                    <p className={styles.statsLabel}>Aumento de conversión</p>
                                    <p className={styles.statsValue}>+{percentage}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
