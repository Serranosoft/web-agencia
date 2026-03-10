import Head from "next/head";
import Container from "@/components/content/container";
import Aos from "@/components/aos/aos";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import styles from "@/styles/quienes/quienes.module.scss";

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
                            <div className={styles.heroBadge}>Sobre Nosotros</div>
                            <h1 className={styles.heroTitle}>
                                Transformamos ideas en <span>experiencias digitales</span> memorables
                            </h1>
                            <p className={styles.heroDesc}>
                                Nuestra misión es potenciar el crecimiento de marcas modernas a través del desarrollo web de vanguardia y marketing estratégico. No solo creamos sitios, construimos el futuro de tu negocio.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/contacto" className={styles.btnPrimary}>Conocer más</Link>
                                <Link href="/desarrollo-web" className={styles.btnSecondary}>Ver proyectos</Link>
                            </div>
                        </div>
                        <div className={styles.heroImage}>
                            <img src="/debocado-2.png" alt="Nuestro Equipo colaborando" />
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
                                <h3>10+</h3>
                                <p>Años de Experiencia</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>250+</h3>
                                <p>Proyectos Entregados</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>15</h3>
                                <p>Expertos Creativos</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>98%</h3>
                                <p>Clientes Satisfechos</p>
                            </div>
                        </div>
                        <div className={styles.historyContent}>
                            <h2>Nuestra Historia</h2>
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
                        <h2>Nuestros Valores</h2>
                        <p>El núcleo de todo lo que hacemos se basa en estos pilares fundamentales que guían cada proyecto.</p>
                    </div>
                    
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>💡</div>
                            <h3>Innovación</h3>
                            <p>Siempre a la vanguardia tecnológica para ofrecer soluciones que hoy parecen del mañana.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>🤝</div>
                            <h3>Compromiso</h3>
                            <p>Tus objetivos son los nuestros. Trabajamos hombro con hombro hasta alcanzar la meta.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>🎨</div>
                            <h3>Creatividad</h3>
                            <p>Buscamos ángulos únicos y diseños que no solo se vean bien, sino que conecten emocionalmente.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>📈</div>
                            <h3>Resultados</h3>
                            <p>Ejecutamos con propósito. El éxito se mide en el crecimiento tangible de tu marca.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Team Section */}
            <section className={styles.grayWrapper}>
                <Container large>
                    <div className={styles.sectionHeader}>
                        <h2>El Equipo</h2>
                        <p>Conoce a las mentes brillantes que darán vida a tu próximo proyecto digital.</p>
                    </div>
                    
                    <div className={styles.teamGrid}>
                        <div className={styles.teamMember}>
                            <img src="/luxefurniture.png" alt="Carlos Méndez" />
                            <h3>Carlos Méndez</h3>
                            <p>CEO & Founder</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="/pomtoy.png" alt="Elena Ríos" />
                            <h3>Elena Ríos</h3>
                            <p>Directora Creativa</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="/datasync.png" alt="David Torres" />
                            <h3>David Torres</h3>
                            <p>Lead Developer</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="/humancopy.png" alt="Sofía López" />
                            <h3>Sofía López</h3>
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
                            <h2>Nuestra Cultura</h2>
                            <div className={styles.cultureList}>
                                <div className={styles.cultureItem}>
                                    <div className={styles.number}>1</div>
                                    <div className={styles.details}>
                                        <h3>Colaboración Radical</h3>
                                        <p>Creemos que las mejores ideas nacen del intercambio constante entre equipos y clientes.</p>
                                    </div>
                                </div>
                                <div className={styles.cultureItem}>
                                    <div className={styles.number}>2</div>
                                    <div className={styles.details}>
                                        <h3>Aprendizaje Continuo</h3>
                                        <p>En el mundo digital, lo único constante es el cambio. Dedicamos tiempo semanal a investigar nuevas tecnologías.</p>
                                    </div>
                                </div>
                                <div className={styles.cultureItem}>
                                    <div className={styles.number}>3</div>
                                    <div className={styles.details}>
                                        <h3>Equilibrio y Pasión</h3>
                                        <p>Un equipo motivado y descansado es un equipo creativo. Fomentamos un entorno de trabajo flexible y humano.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cultureImage}>
                            <img src="/eye2.jpg" alt="Interior de la oficina" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className={styles.wrapper}>
                <Container large>
                    <div className={styles.ctaBox}>
                        <h2>¿Listo para impulsar tu presencia digital?</h2>
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
