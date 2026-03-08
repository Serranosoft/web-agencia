import Tilt from 'react-parallax-tilt';
import { HiChartBar, HiLightningBolt, HiTrendingUp, HiUserAdd } from "react-icons/hi";
import Text from '@/components/content/text';
import Muted from '@/components/content/muted';
import styles from '@/styles/home/hero/cards.module.scss'
import { useEffect, useRef, useState } from 'react'


export default function Cards() {

    const cards = useRef(null);
    const timeOut = useRef(null);
    const [cardActive, setCardActive] = useState(2);

    useEffect(() => {
        const firstCard = cards.current.querySelector(`.parallax:nth-child(1) .card`);
        firstCard.classList.add(styles.activeCard);
        firstCard.querySelector(".active").style.opacity = "1";

        cards.current.querySelectorAll(`.parallax .card`).forEach((card) => card.addEventListener("mouseover", () => {
            window.clearTimeout(timeOut.current);
            clearAllActives();
            card.classList.add(styles.activeCard);
            card.querySelector(".active").style.opacity = "1";
        }));
    }, [])

    useEffect(() => {
        if (cardActive > 0) {
            timeOut.current = setTimeout(() => {
                clearAllActives();
                const currentCard = cards.current.querySelector(`.parallax:nth-child(${cardActive}) .card`);
                currentCard.classList.add(styles.activeCard);
                currentCard.querySelector(".active").style.opacity = "1";
                if (cardActive < 4) {
                    setCardActive(cardActive + 1);
                } else {
                    setCardActive(1);
                }
            }, 3000)
        } else {
            setCardActive(1);
        }

        return () => {
            clearTimeout(timeOut.current);
        }
    }, [cardActive])

    function clearAllActives() {
        cards.current.querySelectorAll(`.parallax .card`).forEach((card) => {
            card.querySelector(".active").style.opacity = "0";
            card.classList.remove(styles.activeCard);
        });
    }

    return (
        <div ref={cards} className={styles.root}>
            <Tilt
                className={`${styles.parallaxGlare} parallax`}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <div className={`${styles.card} card aos-effect1-observer aos-effect1-el`}>
                    <div className={styles.cardInactive}></div>
                    <div className={`${styles.cardActive} active`}></div>
                    <div className={styles.cardContent}>
                        <HiLightningBolt size={50} />
                        <Text xl={true}><strong>Diseño web</strong></Text>
                        <Text>Deja atrás los diseños aburridos o estáticos y <strong>atrapa a tus clientes visualmente</strong>. Atrévete con una experiencia digital más moderna.</Text>
                        <Muted>Diseño web adaptable a cualquier dispositivo</Muted>
                    </div>
                </div>
            </Tilt>
            <Tilt
                className={`${styles.parallaxGlare} parallax`}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <div className={`${styles.card} card aos-effect1-observer aos-effect1-el`}>
                    <div className={styles.cardInactive}></div>
                    <div className={`${styles.cardActive} active`}></div>
                    <div className={styles.cardContent}>
                        <HiChartBar size={50} />
                        <Text xl={true}><strong>SEM</strong></Text>
                        <Text>No pierdas tiempo en buscar la mejor inversión, plataforma o el mejor anuncio. Nosotros nos encargamos de tu publicidad. <strong>Invierte y gana</strong>.</Text>
                        <Muted>Campañas de anuncios para Google o Meta</Muted>
                    </div>
                </div>
            </Tilt>
            <Tilt
                className={`${styles.parallaxGlare} parallax`}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <div className={`${styles.card} card aos-effect1-observer aos-effect1-el`}>
                    <div className={styles.cardInactive}></div>
                    <div className={`${styles.cardActive} active`}></div>
                    <div className={styles.cardContent}>
                        <HiTrendingUp size={50} />
                        <Text xl={true}><strong>SEO</strong></Text>
                        <Text>Impulsa tu negocio para escalar en el ranking y <strong>supera a tu competencia</strong> con las técnicas más actualizadas. Estrategias únicas para cada proyecto.</Text>
                        <Muted>Aumentamos tu audiencia para conseguir clientes</Muted>
                    </div>
                </div>
            </Tilt>
            <Tilt
                className={`${styles.parallaxGlare} parallax`}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <div className={`${styles.card} card aos-effect1-observer aos-effect1-el`}>
                    <div className={styles.cardInactive}></div>
                    <div className={`${styles.cardActive} active`}></div>
                    <div className={styles.cardContent}>
                        <HiUserAdd size={50} />
                        <Text xl={true}><strong>APP's y ASO</strong></Text>
                        <Text>Da el paso para tener tu aplicación móvil y deja que la posicionemos en el top de su categoría. <strong>Facilidad, accesibilidad y comodidad</strong>.</Text>
                        <Muted>Creación, optimización y reputación para tu app</Muted>
                    </div>
                </div>
            </Tilt>
        </div>
    )
}