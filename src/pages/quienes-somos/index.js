import Head from "next/head";
import Container from "@/components/content/container";
import Aos from "@/components/aos/aos";
import Footer from "@/components/footer/footer";
import H1 from "@/components/content/h1";
import H2 from "@/components/content/h2";
import H3 from "@/components/content/h3";
import Button from "@/home/button/button";
import styles from "@/styles/quienes/quienes.module.scss";
import { useEffect, useState, useRef } from "react";
import { HiArrowRight, HiLightBulb, HiUserGroup, HiColorSwatch, HiTrendingUp } from "react-icons/hi";
import CtaSection from "@/components/cta-section/cta-section";

const Counter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const duration = 2000;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeProgress = 1 - Math.pow(1 - progress, 5); // Ease out quint

                        setCount(Math.floor(easeProgress * end));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end]);

    return <span ref={ref}>{count}{suffix}</span>;
};

export default function QuienesSomos() {
    return (
        <>
            <Aos />
            <Head>
                <title>Quiénes somos - Agencia</title>
                <meta name="description" content="Conoce a la agencia y nuestro equipo de expertos en diseño y desarrollo web." />
            </Head>

            {/* Hero Section */}
            <section className={styles.wrapper}>
                <Container large>
                    <div className={styles.heroContainer}>
                        <div className={styles.heroContent}>
                            <div className={styles.heroBadge}><span></span> Sobre Nosotros</div>
                            <H1 kanit title className={styles.heroTitle}>
                                Transformamos ideas en <span>experiencias digitales</span> memorables
                            </H1>
                            <p className={styles.heroDesc}>
                                Nuestra misión es potenciar el crecimiento de marcas modernas a través del desarrollo web de vanguardia y marketing estratégico. No solo creamos sitios, construimos el futuro de tu negocio.
                            </p>
                            <div className={styles.heroButtons}>
                                <Button href="/contacto">Conocer más</Button>
                                <Button secondary href="/desarrollo-web">
                                    Ver proyectos <HiArrowRight />
                                </Button>
                            </div>
                        </div>
                        <div className={styles.heroImage}>
                            <img src="/hero-team.png" alt="Nuestro Equipo colaborando" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Stats & History */}
            <section className={styles.grayWrapper}>
                <Container large>
                    <div className={styles.historyContainer}>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <H3 className={styles.statCardH3}><Counter end={6} suffix="+" /></H3>
                                <p>Años de Experiencia</p>
                            </div>
                            <div className={styles.statCard}>
                                <H3 className={styles.statCardH3}><Counter end={100} suffix="+" /></H3>
                                <p>Proyectos Realizados</p>
                            </div>
                            <div className={styles.statCard}>
                                <H3 className={styles.statCardH3}><Counter end={4} /></H3>
                                <p>Expertos Creativos</p>
                            </div>
                            <div className={styles.statCard}>   
                                <H3 className={styles.statCardH3}><Counter end={98} suffix="%" /></H3>
                                <p>Clientes Satisfechos</p>
                            </div>
                        </div>
                        <div className={styles.historyContent}>
                            <H2 kanit title className={styles.historyContentH2}>Nuestra Historia</H2>
                            <p>
                                Ayudamos a los negocios locales a tener una web que realmente funcione.
                            </p>
                            <p>
                                Durante años hemos visto cómo muchas empresas invierten en páginas web que luego no generan resultados. Webs lentas, difíciles de actualizar o que simplemente no aparecen en Google.
                            </p>
                            <p>
                                Nuestro objetivo es que tu página web se convierta en una herramienta real para tu negocio.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section className={styles.wrapper}>
                <Container large>
                    <div className={styles.sectionHeader}>
                        <H2 kanit title className={styles.sectionHeaderH2}>Nuestros Valores</H2>
                        <p>El núcleo de todo lo que hacemos se basa en estos pilares fundamentales que guían cada proyecto.</p>
                    </div>

                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}><HiLightBulb /></div>
                            <H3 className={styles.valueCardH3}>Innovación</H3>
                            <p>Siempre a la vanguardia tecnológica para ofrecer soluciones que hoy parecen del mañana.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}><HiUserGroup /></div>
                            <H3 className={styles.valueCardH3}>Compromiso</H3>
                            <p>Tus objetivos son los nuestros. Trabajamos hombro con hombro hasta alcanzar la meta.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}><HiColorSwatch /></div>
                            <H3 className={styles.valueCardH3}>Creatividad</H3>
                            <p>Buscamos ángulos únicos y diseños que no solo se vean bien, sino que conecten emocionalmente.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}><HiTrendingUp /></div>
                            <H3 className={styles.valueCardH3}>Resultados</H3>
                            <p>Ejecutamos con propósito. El éxito se mide en el crecimiento tangible de tu marca.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Team Section */}
            <section className={styles.grayWrapper}>
                <Container large>
                    <div className={styles.sectionHeader}>
                        <H2 kanit title className={styles.sectionHeaderH2}>El Equipo</H2>
                        <p>Conoce a las mentes brillantes que darán vida a tu próximo proyecto digital.</p>
                    </div>

                    <div className={styles.teamGrid}>
                        <div className={styles.teamMember}>
                            <img src="/paula.jpg" alt="Paula Quintana" />
                            <H3 className={styles.teamMemberH3}>Paula Quintana</H3>
                            <p>Contenidos & Diseño</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="/manu.jpg" alt="Manuel Serrano" />
                            <H3 className={styles.teamMemberH3}>Manuel Serrano</H3>
                            <p>Programación & SEO</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="/antonio.jpg" alt="Antoñito Fernández" />
                            <H3 className={styles.teamMemberH3}>Antoñito Fernández</H3>
                            <p>Estrategia Digital</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Culture Section */}
            <section className={styles.wrapper}>
                <Container large>
                    <div className={styles.sectionHeader} style={{ textAlign: 'left', margin: '0 0 4rem 0' }}>
                        <H2 kanit title className={styles.sectionHeaderH2}>Nuestra forma de trabajar</H2>
                    </div>
                    <div className={styles.cultureContainer}>
                        <div className={styles.cultureContent}>
                            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'rgba(45, 52, 54, 0.8)' }}>
                                Creemos que una buena página web no empieza con el diseño, sino con entender el negocio del cliente.<br /><br />
                                Por eso nuestro proceso suele seguir estos pasos:
                            </p>
                            <div className={styles.cultureList}>
                                <div className={styles.cultureItem}>
                                    <div className={styles.number}>1</div>
                                    <div className={styles.details} style={{ alignSelf: 'center' }}>
                                        <H3 className={styles.cultureItemH3}>Conocer tu empresa y tus objetivos</H3>
                                        <p>Antes de empezar, nos tomamos el tiempo de entender tu negocio, tu sector y qué quieres conseguir con tu web. Así podemos crear una solución realmente adaptada a tus necesidades.</p>
                                    </div>
                                </div>
                                <div className={styles.cultureItem}>
                                    <div className={styles.number}>2</div>
                                    <div className={styles.details} style={{ alignSelf: 'center' }}>
                                        <H3 className={styles.cultureItemH3}>Analizar tu competencia y el mercado local</H3>
                                        <p>Estudiamos cómo trabajan otras empresas de tu sector, especialmente en Cádiz y la provincia, para detectar oportunidades y ayudarte a destacar frente a la competencia.</p>
                                    </div>
                                </div>
                                <div className={styles.cultureItem}>
                                    <div className={styles.number}>3</div>
                                    <div className={styles.details} style={{ alignSelf: 'center' }}>
                                        <H3 className={styles.cultureItemH3}>Diseñar una web clara y profesional</H3>
                                        <p>Creamos una página web moderna, fácil de usar y adaptada a móviles, pensada para transmitir confianza y facilitar que los visitantes contacten contigo.</p>
                                    </div>
                                </div>
                                <div className={styles.cultureItem}>
                                    <div className={styles.number}>4</div>
                                    <div className={styles.details} style={{ alignSelf: 'center' }}>
                                        <H3 className={styles.cultureItemH3}>Optimizarla para Google</H3>
                                        <p>Aplicamos buenas prácticas de posicionamiento SEO desde el principio para que tu web tenga más opciones de aparecer cuando alguien busca servicios como el tuyo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cultureImage}>
                            <img src="/culture-office.png" alt="Interior de la oficina" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <CtaSection
                title="¿Hablamos sobre tu proyecto?"
                desc="Cuéntanos los detalles de tu negocio o contacta directamente con nosotros para que podamos trabajar juntos en mejorar e impulsar tu negocio hacia la cima"
            />

            <Footer />
        </>
    );
}
