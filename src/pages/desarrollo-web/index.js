import { useEffect } from "react"
import styles from "@/styles/designs/designs.module.scss";
import Container from "@/components/content/container";
import Head from "next/head";
import H1 from "@/components/content/h1";
import Text from "@/components/content/text";
import Bento from "@/designs/bento";
import SubHeading from "@/components/content/subheading";
import Stack from "@/designs/stack";
import Aos from "@/components/aos/aos";
import extraStyles from "@/styles/designs/extra.module.scss";
import Link from "next/link";
import Footer from "@/components/footer/footer";

export default function Designs() {

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = document.querySelectorAll('.item')

            const expand = (item, i) => {
                items.forEach((it, ind) => {
                    if (i === ind) return
                    it.clicked = false
                })

                console.log(window.matchMedia("(max-width: 980px)"));
                gsap.to(items, {
                    width: item.clicked ? window.matchMedia("(max-width: 980px)").matches ? '95vw' : '20vw' : window.matchMedia("(max-width: 980px)").matches ? '60vw' : '18vw',
                    borderRadius: "3vw",
                    duration: 2,
                    ease: 'elastic(1, .6)'
                })

                item.clicked = !item.clicked
                gsap.to(item, {
                    width: item.clicked ? window.matchMedia("(max-width: 980px)").matches ? '95vw' : '40vw' : window.matchMedia("(max-width: 980px)").matches ? '60vw' : '15vw',
                    borderRadius: item.clicked ? "0rem" : "3vw",
                    duration: 2.5,
                    ease: 'elastic(1, .3)'
                })
            }

            items.forEach((item, i) => {
                item.clicked = false
                item.addEventListener('click', () => expand(item, i))
            })

        }, [])

        return () => ctx.revert();
    }, [])


    return (
        <>
            <Aos />
            <Head>
                <title>Casos de éxito de tuwebencadiz.es</title>
                <meta name="description" content="Casos de éxito y portafolio de web y marketing por Kaoos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js"></script>
            </Head>
            <Container fullscreen className={styles.root}>
                <div className={styles.bg}></div>
                <div className={styles.header}>
                    <H1 title kanit>Casos de éxito</H1>
                    <SubHeading>Clica en cada elemento para ver el diseño completo.</SubHeading>
                </div>
                <div className={styles.group}>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                    <video className={`${styles.item} item`} src="/dragsa-old.mp4" autoPlay loop muted />
                    <div className={`${styles.item} item`}></div>
                </div>

                <Bento />

                <div className={styles.group}>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                </div>

                <Stack />

                <div className={styles.group}>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                </div>
            </Container>

            {/* Featured Projects Section */}
            <section className={extraStyles.wrapper}>
                <Container large>
                    <div className={extraStyles.featuredHeader}>
                        <h2 className={extraStyles.title}>Proyectos Destacados</h2>
                        <div className={extraStyles.controls}>
                            <button>&lt;</button>
                            <button className={extraStyles.active}>&gt;</button>
                        </div>
                    </div>
                    <div className={extraStyles.projectGrid}>
                        <div className={extraStyles.projectCard}>
                            <div className={extraStyles.imageBox} style={{ background: '#f8ead2' }}>
                            </div>
                            <div className={extraStyles.projectInfo}>
                                <h3>E-commerce Pro</h3>
                                <p>Rediseño completo y optimización de conversión para retail de moda.</p>
                            </div>
                        </div>
                        <div className={extraStyles.projectCard}>
                            <div className={extraStyles.imageBox} style={{ background: '#22c1db' }}>
                                <img src="/dragsa-old.mp4" style={{ objectFit: 'cover', opacity: 0.1 }} onError={(e) => e.target.style.display = 'none'} />
                            </div>
                            <div className={extraStyles.projectInfo}>
                                <h3>SaaS Innovador</h3>
                                <p>Arquitectura escalable y UI/UX moderna para startups tecnológicas.</p>
                            </div>
                        </div>
                        <div className={extraStyles.projectCard}>
                            <div className={extraStyles.imageBox} style={{ background: '#a0cdba' }}>
                            </div>
                            <div className={extraStyles.projectInfo}>
                                <h3>HealthConnect</h3>
                                <p>Interfaz intuitiva para gestión de pacientes y telemedicina.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Sectors Section */}
            <section className={extraStyles.grayWrapper}>
                <Container large>
                    <div className={extraStyles.sectorsHeader}>
                        <h2 className={extraStyles.title}>Sectores en los que nos especializamos</h2>
                        <p className={extraStyles.desc}>
                            Experiencia profunda en verticales clave para entregar resultados que importan en tu industria.
                        </p>
                    </div>
                    
                    <div className={extraStyles.sectorGrid}>
                        <Link href="/contacto" className={extraStyles.sectorCard}>
                            <h3 className={extraStyles.sectorTitle}>E-commerce</h3>
                        </Link>
                        <Link href="/contacto" className={extraStyles.sectorCard}>
                            <h3 className={extraStyles.sectorTitle}>Bienes Raíces</h3>
                        </Link>
                        <Link href="/contacto" className={extraStyles.sectorCard}>
                            <h3 className={extraStyles.sectorTitle}>Salud</h3>
                        </Link>
                        <Link href="/contacto" className={extraStyles.sectorCard}>
                            <h3 className={extraStyles.sectorTitle}>Tecnología</h3>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className={extraStyles.yellowWrapper}>
                <Container large>
                    <div className={extraStyles.ctaContent}>
                        <h2 className={extraStyles.ctaTitle}>¿Tienes un proyecto en mente?</h2>
                        <p className={extraStyles.ctaDesc}>
                            Estamos listos para transformar tus ideas en realidades digitales de alto impacto. Hablemos sobre cómo podemos ayudarte.
                        </p>
                        <div className={extraStyles.ctaButtons}>
                            <Link href="/contacto" className={extraStyles.btnDark}>
                                Iniciar mi Proyecto
                            </Link>
                            <Link href="/contacto" className={extraStyles.btnOutline}>
                                Agendar una Llamada
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
            
            <Footer />
        </>
    )
}