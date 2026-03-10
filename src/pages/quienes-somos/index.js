import Head from "next/head";
import Container from "@/components/content/container";
import Aos from "@/components/aos/aos";
import Footer from "@/components/footer/footer";
import H1 from "@/components/content/h1";
import H2 from "@/components/content/h2";
import H3 from "@/components/content/h3";
import Link from "next/link";
import styles from "@/styles/quienes/quienes.module.scss";
import { useEffect, useState, useRef } from "react";

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
                                <Link href="/contacto" className={styles.btnPrimary}>Conocer más</Link>
                                <Link href="/desarrollo-web" className={styles.btnSecondary}>Ver proyectos</Link>
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
                                <H3 className={styles.statCardH3}><Counter end={10} suffix="+" /></H3>
                                <p>Años de Experiencia</p>
                            </div>
                            <div className={styles.statCard}>
                                <H3 className={styles.statCardH3}><Counter end={250} suffix="+" /></H3>
                                <p>Proyectos Entregados</p>
                            </div>
                            <div className={styles.statCard}>
                                <H3 className={styles.statCardH3}><Counter end={15} /></H3>
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
                                Fundada con la visión de romper las barreras entre la tecnología y la creatividad, nuestra agencia ha evolucionado de un pequeño estudio de diseño a un referente en soluciones digitales integrales.
                            </p>
                            <p>
                                Nos apasiona construir el futuro de la web junto a nuestros clientes. Lo que comenzó en una mesa compartida hoy es un equipo multidisciplinar que no teme a los desafíos técnicos ni a las ideas disruptivas.
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
                            <div className={styles.iconWrapper}>💡</div>
                            <H3 className={styles.valueCardH3}>Innovación</H3>
                            <p>Siempre a la vanguardia tecnológica para ofrecer soluciones que hoy parecen del mañana.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>🤝</div>
                            <H3 className={styles.valueCardH3}>Compromiso</H3>
                            <p>Tus objetivos son los nuestros. Trabajamos hombro con hombro hasta alcanzar la meta.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>🎨</div>
                            <H3 className={styles.valueCardH3}>Creatividad</H3>
                            <p>Buscamos ángulos únicos y diseños que no solo se vean bien, sino que conecten emocionalmente.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>📈</div>
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
                            <img src="/team-carlos.png" alt="Carlos Méndez" />
                            <H3 className={styles.teamMemberH3}>Carlos Méndez</H3>
                            <p>CEO & Founder</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="/team-elena.png" alt="Elena Ríos" />
                            <H3 className={styles.teamMemberH3}>Elena Ríos</H3>
                            <p>Directora Creativa</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="/team-david.png" alt="David Torres" />
                            <H3 className={styles.teamMemberH3}>David Torres</H3>
                            <p>Lead Developer</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="/team-sofia.png" alt="Sofía López" />
                            <H3 className={styles.teamMemberH3}>Sofía López</H3>
                            <p>Marketing Strategy</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Culture Section */}
            <section className={styles.wrapper}>
                <Container large>
                    <div className={styles.cultureContainer}>
                        <div className={styles.cultureContent}>
                            <H2 kanit title className={styles.cultureContentH2}>Nuestra Cultura</H2>
                            <div className={styles.cultureList}>
                                <div className={styles.cultureItem}>
                                    <div className={styles.number}>1</div>
                                    <div className={styles.details}>
                                        <H3 className={styles.cultureItemH3}>Colaboración Radical</H3>
                                        <p>Creemos que las mejores ideas nacen del intercambio constante entre equipos y clientes.</p>
                                    </div>
                                </div>
                                <div className={styles.cultureItem}>
                                    <div className={styles.number}>2</div>
                                    <div className={styles.details}>
                                        <H3 className={styles.cultureItemH3}>Aprendizaje Continuo</H3>
                                        <p>En el mundo digital, lo único constante es el cambio. Dedicamos tiempo semanal a investigar nuevas tecnologías.</p>
                                    </div>
                                </div>
                                <div className={styles.cultureItem}>
                                    <div className={styles.number}>3</div>
                                    <div className={styles.details}>
                                        <H3 className={styles.cultureItemH3}>Equilibrio y Pasión</H3>
                                        <p>Un equipo motivado y descansado es un equipo creativo. Fomentamos un entorno de trabajo flexible y humano.</p>
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
            <section className={styles.wrapper}>
                <Container large>
                    <div className={styles.ctaBox}>
                        <H2 kanit title className={styles.ctaBoxH2}>¿Listo para impulsar tu presencia digital?</H2>
                        <p>Estamos listos para escuchar tu idea y convertirla en una realidad tecnológica de éxito.</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contacto" className={styles.btnDark}>Trabajar con nosotros</Link>
                            <Link href="/contacto" className={styles.btnOutlineDark}>Contactar ventas</Link>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    );
}
