import Head from "next/head";
import Container from "@/components/content/container";
import Aos from "@/components/aos/aos";
import Footer from "@/components/footer/footer";
import H1 from "@/components/content/h1";
import H2 from "@/components/content/h2";
import H3 from "@/components/content/h3";
import Button from "@/components/content/button";
import styles from "@/styles/servicios/servicios.module.scss";
import { HiCode, HiTrendingUp, HiUserGroup, HiColorSwatch, HiCheck, HiChevronDown } from "react-icons/hi";

import { useState } from "react";

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
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

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
                        <p className={styles.badgeLabel}>SERVICIOS Y PLANES</p>
                        <H1 kanit title className={styles.title}>
                            Soluciones Digitales<br/>
                            que <span className={styles.highlight}>Impulsan</span> tu<br/>
                            Negocio
                        </H1>
                        <p className={styles.subtitle}>
                            Flexibles y rentables. Escoge el nivel adecuado a tu fase de crecimiento. Combinamos<br/> 
                            ingeniería de software de alta calidad con estrategias de marketing orientadas al ROI.
                        </p>
                        <div className={styles.btnGroup}>
                            <Button highlight target="_blank" to="https://form.typeform.com/to/vFA7yHtZ">Pedir Presupuesto</Button>
                            <Button darkOutline to="/desarrollo-web">Ver Proyectos</Button>
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



                {/* Pricing Section */}
                <Container large className={styles.pricingSection}>
                    <H2 kanit title className={styles.pricingTitle}>Paquetes de Servicios</H2>
                    <p className={styles.pricingSubtitle}>Soluciones escalables a tu fase de crecimiento. Evita sorpresas.</p>

                    <div className={styles.pricingGrid}>
                        {/* Plan 1 */}
                        <div className={styles.priceCard}>
                            <H3 kanit className={styles.planName}>Startup Growth</H3>
                            <div className={styles.planPrice}>
                                <span>Desde</span>
                                <H2 kanit>$1,499</H2>
                                <span>/mes</span>
                            </div>
                            <ul className={styles.planFeatures}>
                                <li><HiCheck className={styles.checkIcon}/> Landing Page Optimizada</li>
                                <li><HiCheck className={styles.checkIcon}/> SEO Local & Básico</li>
                                <li><HiCheck className={styles.checkIcon}/> Gestión de Redes Lite</li>
                                <li><HiCheck className={styles.checkIcon}/> Reporte de Mensual</li>
                            </ul>
                            <div className={styles.priceBtnWrapper}>
                                <Button white className={styles.fullBtn} href="/contacto">Seleccionar</Button>
                            </div>
                        </div>

                        {/* Plan 2 */}
                        <div className={`${styles.priceCard} ${styles.highlightedPlan}`}>
                            <div className={styles.recomendedBadge}>RECOMENDADO</div>
                            <H3 kanit className={styles.planName}>Business Scale</H3>
                            <div className={styles.planPrice}>
                                <span>Desde</span>
                                <H2 kanit>$3,299</H2>
                                <span>/mes</span>
                            </div>
                            <ul className={styles.planFeatures}>
                                <li><HiCheck className={styles.checkIcon}/> Web App/E-commerce</li>
                                <li><HiCheck className={styles.checkIcon}/> Estrategia SEO Full-Stack</li>
                                <li><HiCheck className={styles.checkIcon}/> Google & Social Ads</li>
                                <li><HiCheck className={styles.checkIcon}/> UX/UI Riesing trimestral</li>
                                <li><HiCheck className={styles.checkIcon}/> Soporte Técnico 24/7</li>
                            </ul>
                            <div className={styles.priceBtnWrapper}>
                                <Button className={styles.fullBtn} href="/contacto">Obtener Presupuesto</Button>
                            </div>
                        </div>

                        {/* Plan 3 */}
                        <div className={styles.priceCard}>
                            <H3 kanit className={styles.planName}>Enterprise</H3>
                            <div className={styles.planPrice}>
                                <span>Custom</span>
                            </div>
                            <ul className={styles.planFeatures}>
                                <li><HiCheck className={styles.checkIcon}/> Infraestructura Dedicada</li>
                                <li><HiCheck className={styles.checkIcon}/> Consultoría de Transformación</li>
                                <li><HiCheck className={styles.checkIcon}/> Desarrollo de Software a Medida</li>
                                <li><HiCheck className={styles.checkIcon}/> Account Manager Dedicado</li>
                            </ul>
                            <div className={styles.priceBtnWrapper}>
                                <Button white className={styles.fullBtn} href="/contacto">Contáctanos</Button>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* FAQ Block */}
                <div className={styles.faqSector} id="faq">
                    <Container large>
                        <H2 kanit title className={styles.faqTitle}>Preguntas Frecuentes</H2>
                        
                        <div className={styles.faqAccordion}>
                            {faqItems.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className={styles.faqTop}>
                                        <H3 kanit className={styles.faqQuestion}>{item.question}</H3>
                                        <HiChevronDown className={styles.chevronIcon} />
                                    </div>
                                    <div className={styles.faqAnswer}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>

                {/* Bottom CTA */}
                <Container large className={styles.ctaBottomWrapper}>
                    <div className={styles.ctaBox}>
                        <H2 kanit title className={styles.ctaBoxH2}>¿Listo para escalar tu presencia digital?</H2>
                        <p>Agenda una consultoría estratégica gratuita de 45 minutos y analicemos tus objetivos.</p>
                        <Button dark href="/contacto">Empezar Ahora</Button>
                    </div>
                </Container>

            </section>
            <Footer />
        </>
    );
}
