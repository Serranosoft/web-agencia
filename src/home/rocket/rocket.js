import Container from "@/components/content/container";
import styles from "@/styles/home/rocket/rocket.module.scss";
import Text from "@/components/content/text";
import { useEffect } from "react";
import { DM_Serif_Text } from "next/font/google";

const font = DM_Serif_Text({ subsets: ['latin'], weight: "400" })

export default function Info1() {

    useEffect(() => {

        const ctx = gsap.context(() => {
            const scrollTrigger = {
                trigger: ".gsap-content",
                start: "center top",
                end: "+=500",
                scrub: true,
            }
    
            gsap.to(".gsap-content", { scrollTrigger, scale: 0.85, });
            gsap.to(".gsap-wrapper", { scrollTrigger, duration: 0.5, backgroundColor: "rgba(255, 255, 255, 1)" });
            gsap.to(".gsap-text", { scrollTrigger, color: "#2D3436" });
            gsap.to(".gsap-rocket", { scrollTrigger, y: "-100vh", scale: 0.5 });
            ScrollTrigger.create({
                trigger: ".gsap-wrapper",
                start: "top top+=100",
                end: "bottom top",
                onEnter: () => gsap.to(".header", { yPercent: -100, duration: 0.3 }),
                onLeave: () => gsap.to(".header", { yPercent: 0, duration: 0.3 }),
                onEnterBack: () => gsap.to(".header", { yPercent: -100, duration: 0.3 }),
                onLeaveBack: () => gsap.to(".header", { yPercent: 0, duration: 0.3 }),
            });

            return () => ctx.revert();
        })

    }, [])

    return (
        <Container fullscreen className={styles.root}>

            <div className={`${styles.gradientTop} gsap-hide-header-trigger`}></div>

            <div className={`${styles.effectWrapper} gsap-wrapper`}>
                <div className={`${styles.content} gsap-content`}>

                    <div className={`${styles.columns}`}>
                        <div className="aos-effect3-observer aos-effect3-el">
                            <Text xxxl className={`${font.className} gsap-text`}>Impulsa tu</Text>
                            <Text className="gsap-text">En tuwebencadiz.es diseñamos <strong>páginas web únicas y profesionales</strong> adaptadas a tus necesidades reales. </Text>
                            <Text className="gsap-text">Convertimos tus ideas en una ventana digital que atraiga clientes y genere confianza.</Text>
                        </div>
                        <div className="aos-effect3-observer aos-effect3-el">
                            <Text xxxl className={`${font.className} gsap-text`}>página web</Text>
                            <Text className="gsap-text">Creamos una estrategia SEO única según el tipo de negocio con un análisis de mercado y competencia. </Text>
                            <Text className="gsap-text">Para páginas web ya creadas, <strong>comenzamos con una auditoría SEO</strong> y aplicando soluciones.</Text>

                        </div>
                    </div>

                    <div className={`${styles.rocket} gsap-rocket`}>
                        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                        <lottie-player src="/rocket.json" background="transparent" speed="1" style={{ width: 500, height: 500 }} loop autoplay></lottie-player>
                    </div>
                </div>
            </div>
            
        </Container>
    )
}