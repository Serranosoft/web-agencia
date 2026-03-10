import Head from "next/head";
import Container from "@/components/content/container";
import Aos from "@/components/aos/aos";
import Footer from "@/components/footer/footer";
import H1 from "@/components/content/h1";
import H3 from "@/components/content/h3";
import styles from "@/styles/contacto/contacto.module.scss";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaShareAlt, FaGlobe, FaDiscord } from "react-icons/fa";

export default function Contacto() {
    return (
        <>
            <Aos />
            <Head>
                <title>Contacto - Agencia</title>
                <meta name="description" content="Ponte en contacto con nuestro equipo de expertos para llevar tu proyecto al siguiente nivel." />
            </Head>

            <section className={styles.wrapper}>
                <Container large>
                    <div className={styles.header}>
                        <H1 kanit title className={styles.title}>Contacta con nosotros</H1>
                        <p className={styles.subtitle}>
                            Estamos listos para llevar tu presencia digital al siguiente nivel. Cuéntanos tu proyecto y nuestro equipo de expertos se pondrá en contacto contigo en menos de 24 horas.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {/* Info Column */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoCards}>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}><HiMail /></div>
                                    <H3>Email</H3>
                                    <p>hola@agenciadigital.com</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}><HiPhone /></div>
                                    <H3>Teléfono</H3>
                                    <p>+34 942 242 573</p>
                                </div>
                                <div className={`${styles.infoItem} ${styles.addressCard}`}>
                                    <div className={styles.iconWrapper}><HiLocationMarker /></div>
                                    <H3>Dirección</H3>
                                    <p>Calle Innovación 123, 28001 Madrid, España</p>
                                </div>
                            </div>

                            <div className={styles.socialSection}>
                                <p>SÍGUENOS</p>
                                <div className={styles.socialIcons}>
                                    <a href="#" aria-label="Compartir"><FaShareAlt /></a>
                                    <a href="#" aria-label="Web"><FaGlobe /></a>
                                    <a href="#" aria-label="Discord"><FaDiscord /></a>
                                </div>
                            </div>

                            <div className={styles.mapWrapper}>
                                <img src="/contact-map.png" alt="Mapa de ubicación" />
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.mapButton}>
                                    <HiLocationMarker />
                                    Ver en Google Maps
                                </a>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className={styles.formColumn}>
                            <H3>Envíanos un mensaje</H3>
                            <form className={styles.form} onClick={(e) => e.preventDefault()}>
                                <div className={styles.formRow}>
                                    <div className={styles.inputGroup}>
                                        <label>Nombre completo</label>
                                        <input type="text" placeholder="Ej. Juan Pérez" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Email corporativo</label>
                                        <input type="email" placeholder="juan@empresa.com" />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.inputGroup}>
                                        <label>Empresa</label>
                                        <input type="text" placeholder="Nombre de tu negocio" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Asunto</label>
                                        <select>
                                            <option>Desarrollo Web</option>
                                            <option>Diseño UX/UI</option>
                                            <option>Marketing</option>
                                            <option>Otro</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Mensaje</label>
                                    <textarea placeholder="Cuéntanos en qué te podemos ayudar..."></textarea>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    );
}
