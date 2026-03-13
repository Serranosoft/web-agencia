import Head from "next/head";
import Container from "@/components/content/container";
import Aos from "@/components/aos/aos";
import Footer from "@/components/footer/footer";
import H1 from "@/components/content/h1";
import H2 from "@/components/content/h2";
import H3 from "@/components/content/h3";
import Button from "@/home/button/button";
import styles from "@/styles/servicios/servicios.module.scss";
import { HiCode, HiTrendingUp, HiUserGroup, HiColorSwatch, HiCheck, HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import CtaSection from "@/components/cta-section/cta-section";
import Faq from "@/home/faq/faq";

const faqItems = [
    {
        question: "¿Cuánto tiempo toma lanzar un sitio web?",
        answer: "Dependiendo de la complejidad, un proyecto promedio toma entre 2 y 4 semanas desde la fase de diseño hasta el despliegue final."
    },
    {
        question: "¿Ofrecen mantenimiento después del lanzamiento?",
        answer: "Sí, todos nuestros planes incluyen soporte de un mes extra, actualizaciones de seguridad y optimizaciones mensuales de rendimiento."
    },
    {
        question: "¿Puedo contratar solo un servicio específico?",
        answer: "Absolutamente, aunque entregamos mejor en ecosistemas integrales, podemos colaborar en proyectos específicos de SEO, diseño o desarrollo a la medida."
    }
];

export default function Servicios() {

    return (
        <>
            <Aos />
            <Head>
                <title>Servicios y Planes - Agencia</title>
                <meta name="description" content="Soluciones Digitales que Impulsan tu Negocio. Flexibles y rentables." />
            </Head>

            <section className={styles.wrapper}>
                
                {/* Hero Section */}
                <Container large className={styles.heroContainer}>
                    <div className={styles.hero}>
                        <div className={styles.heroBadge}><span></span> Servicios y Planes</div>
                        <H1 kanit title className={styles.title}>
                            Soluciones Digitales<br/>
                            que <span className={styles.highlight}>Impulsan</span> tu<br/>
                            Negocio
                        </H1>
                        <p className={styles.subtitle}>
                            Personalizados, flexibles y rentables. Trabajamos mano a mano con negocios locales ajustando los precios para que todo el mundo pueda actualizarse al mundo digital. Una agencia creada por y para el pueblo.
                        </p>
                        <div className={styles.btnGroup}>
                            <Button target="_blank" href="https://form.typeform.com/to/vFA7yHtZ">Pedir Presupuesto</Button>
                            <Button secondary href="/desarrollo-web">Ver Proyectos</Button>
                        </div>
                    </div>
                </Container>

                {/* Services Grid */}
                <Container large id="servicios">
                    <div className={styles.servicesGrid}>
                        {/* Service 1 */}
                        <div className={styles.serviceCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}><HiCode /></div>
                                <H3 kanit className={styles.cardTitle}>Desarrollo Web & Apps</H3>
                                <p>Creamos ecosistemas digitales robustos, rápidos y totalmente escalables. Desde SPAs dinámicas hasta eficientes E-commerce.</p>
                            </div>
                            <ul className={styles.featuresList}>
                                <li><HiCheck className={styles.checkIcon}/> React, Next.js & Vue.js</li>
                                <li><HiCheck className={styles.checkIcon}/> Arquitecturas Serverless & Microservicios</li>
                                <li><HiCheck className={styles.checkIcon}/> Integración con APIs de terceros</li>
                            </ul>
                            <div className={styles.imgWrapper}>
                                <img src="/servicios/dev_code.png" alt="Desarrollo Web y Apps" />
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className={styles.serviceCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}><HiTrendingUp /></div>
                                <H3 kanit className={styles.cardTitle}>SEO Avanzado</H3>
                                <p>No solo buscamos clics, buscamos tráfico calificado que convierta. Optimizamos cada aspecto técnico y de contenido.</p>
                            </div>
                            <ul className={styles.featuresList}>
                                <li><HiCheck className={styles.checkIcon}/> Auditoría técnica profunda</li>
                                <li><HiCheck className={styles.checkIcon}/> SEO de contenidos & Linkbuilding</li>
                                <li><HiCheck className={styles.checkIcon}/> Optimización de Core Web Vitals</li>
                            </ul>
                            <div className={styles.imgWrapper}>
                                <img src="/servicios/seo_chart.png" alt="SEO Avanzado" />
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className={styles.serviceCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}><HiUserGroup /></div>
                                <H3 kanit className={styles.cardTitle}>Marketing Digital & Ads</H3>
                                <p>Estrategias omicanal enfocadas en el embudo de ventas. Maximizamos el retorno de tu inversión publicitaria en cada plataforma.</p>
                            </div>
                            <ul className={styles.featuresList}>
                                <li><HiCheck className={styles.checkIcon}/> Google Ads & Meta Ads</li>
                                <li><HiCheck className={styles.checkIcon}/> Estrategia de Inbound Marketing</li>
                                <li><HiCheck className={styles.checkIcon}/> Analítica avanzada de conversión</li>
                            </ul>
                            <div className={styles.imgWrapper}>
                                <img src="/servicios/marketing.png" alt="Marketing Digital" />
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className={styles.serviceCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}><HiColorSwatch /></div>
                                <H3 kanit className={styles.cardTitle}>Diseño UX/UI</H3>
                                <p>Centrado en el diseño minucioso con una estética premium al detalle para aumentar la retención y la confianza de tu marca.</p>
                            </div>
                            <ul className={styles.featuresList}>
                                <li><HiCheck className={styles.checkIcon}/> Prototipado de alta fidelidad</li>
                                <li><HiCheck className={styles.checkIcon}/> User Testing & Research</li>
                                <li><HiCheck className={styles.checkIcon}/> Sistemas de Diseño escalables</li>
                            </ul>
                            <div className={styles.imgWrapper}>
                                <img src="/servicios/uxui.png" alt="Diseño UX UI" />
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Results Section */}
                <section className={styles.resultsDarkSector}>
                    <Container large>
                        <div className={styles.resultsGrid}>
                            <div className={styles.resultsText}>
                                <H2 kanit title className={styles.resultsHeading}>
                                    Enfoque en Resultados,<br/>
                                    <span className={styles.highlightYellow}>No en Promesas Vacías</span>
                                </H2>
                                <p>En tuwebencadiz entendemos que la tecnología es un medio, no el fin. Cada línea de código y cada campaña de marketing está diseñada para mover la aguja de tu negocio.</p>
                                
                                <div className={styles.statsGrid}>
                                    <div className={styles.statItem}>
                                        <H2 kanit>+250%</H2>
                                        <p>ROI PROMEDIO</p>
                                    </div>
                                    <div className={styles.statItem}>
                                        <H2 kanit>15<span style={{fontSize: "0.5em"}}>ms</span></H2>
                                        <p>LATENCIA WEB MEDIA</p>
                                    </div>
                                    <div className={styles.statItem}>
                                        <H2 kanit>100+</H2>
                                        <p>PROYECTOS LANZADOS</p>
                                    </div>
                                    <div className={styles.statItem}>
                                        <H2 kanit>98%</H2>
                                        <p>RETENCIÓN CLIENTES</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.resultsImageWrapper}>
                                <img src="/servicios/team.png" alt="Equipo trabajando en resultados" />
                            </div>
                        </div>
                    </Container>
                </section>





                {/* FAQ Block */}
                <Faq items={faqItems} title="Preguntas Frecuentes" badge="SERVICIOS" />

                {/* Bottom CTA */}
                <CtaSection
                    title="¿Listo para escalar tu negocio?"
                    desc="Contacta con nosotros para que podamos elegir la mejor estrategia para tu negocio, diseñar una página que se adapte a tus clientes o cubrir las necesidades que tenga tu página actual"
                    btnText="¡Hablemos!"
                />

            </section>
            <Footer />
        </>
    );
}
