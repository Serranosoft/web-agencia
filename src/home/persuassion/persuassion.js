import Container from "@/components/content/container";
import Text from "@/components/content/text";
import styles from "@/styles/home/persuassion/persuassion.module.scss";
import { useEffect } from "react";

export default function Persuassion() {

    useEffect(() => {

        const ctx = gsap.context(() => {
            gsap.set(".gsap-banner3d-1", { perspectiveOrigin: "center -100vh" });
            gsap.set(".gsap-banner3d-2", { perspectiveOrigin: "center -100vh" });
            gsap.set(".gsap-banner3d-3", { perspectiveOrigin: "center -100vh" });
            gsap.set(".gsap-banner3d-4", { perspectiveOrigin: "left -100vh" });

            const scrollTrigger = (trigger) => {
                return {
                    trigger: trigger,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom top"
                }
            }

            gsap.to(".gsap-banner3d-1", {
                scrollTrigger: scrollTrigger(".gsap-banner3d-1"),
                perspectiveOrigin: "center 100vh",
                ease: "none"
            });

            gsap.to(".gsap-banner3d-2", {
                scrollTrigger: scrollTrigger(".gsap-banner3d-2"),
                perspectiveOrigin: "center 100vh",
                ease: "none"
            });

            gsap.to(".gsap-banner3d-3", {
                scrollTrigger: scrollTrigger(".gsap-banner3d-3"),
                perspectiveOrigin: "center 100vh",
                ease: "none"
            });

            return () => ctx.revert();
        })
    }, [])

    return (
        <>
            <Container fullscreen className={`${styles.root}`}>
                <section className={styles.banner}>
                    <div className="gsap-banner3d-1">
                        <div>
                            <Text xxl kanit>¿Por qué elegir tuwebencadiz.es y no otra agencia?</Text>
                        </div>
                    </div>
                </section>

                <section className={styles.miniBanner}></section>
                {/* PONME EL TEXTO CENTRADO Y EN TAMAÑO XL: Nacimos de crear nuestros propios proyectos SEO, experimentando y practicando en cada paso. Actualmente, nos dedicamos por y para esto. Trabajamos con contenido actualizado cada día y buscando constanmente las méjores técnicas y las estrategias más óptimas para cada negocio */}

                <section className={styles.banner}>
                    <div className="gsap-banner3d-2">
                        <div>
                            <Text xxl kanit>Persuadir, cautivar y convertir</Text>
                        </div>
                    </div>
                </section>

                <section className={styles.halfBanner}><Text xxl kanit>PARA IMPULSAR UNA PÁGINA WEB SOLO<br></br> NECESITAMOS ENCONTRAR LA OPORTUNIDAD</Text></section>

                <section className={`${styles.banner} ${styles.divided}`}>
                    <div className="gsap-banner3d-3">
                        <div>
                            <Text xxl kanit>tuwebencadiz.es - Expertos en resultados</Text>
                        </div>
                    </div>
                    <div className={styles.image}></div>
                </section>

                <section className={styles.halfBanner}>
                    <Text xxxl kanit>HACEMOS LAS COSAS<br></br> DIFERENTE</Text>
                </section>
            </Container>
        </>
    )
}