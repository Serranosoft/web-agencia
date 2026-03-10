import Head from "next/head";
import Container from "@/components/content/container";
import Aos from "@/components/aos/aos";
import Footer from "@/components/footer/footer";
import H1 from "@/components/content/h1";
import H2 from "@/components/content/h2";
import H3 from "@/components/content/h3";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiShare2, FiGlobe, FiFacebook, FiInstagram } from "react-icons/fi";
import styles from "@/styles/contacto/contacto.module.scss";

export default function Contacto() {
    return (
        <>
            <Aos />
            <Head>
                <title>Contacta con nosotros - Agencia</title>
                <meta name="description" content="Estamos listos para llevar tu presencia digital al siguiente nivel. Contacta con nosotros." />
            </Head>

            <section className={styles.wrapper}>
                <Container large>
                    {/* Header Section */}
                    <div className={styles.headerSection}>
                        <H1 kanit title className={styles.headerTitle}>
                            Contacta con nosotros
                        </H1>
                        <p>
                            Estamos listos para llevar tu presencia digital al siguiente nivel. Cuéntanos tu proyecto y nuestro equipo de expertos se pondrá en contacto contigo en menos de 24 horas.
                        </p>
                    </div>

                    <div className={styles.gridContainer}>
                        {/* Left Column - Info & Map */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoGrid}>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}>
                                        <FiMail />
                                    </div>
                                    <H3 className={styles.infoTitle}>Email</H3>
                                    <p>info@tuwebencadiz.es</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}>
                                        <FiPhone />
                                    </div>
                                    <H3 className={styles.infoTitle}>Teléfono</H3>
                                    <p>644 466 492</p>
                                </div>
                                <div className={`${styles.infoItem} ${styles.infoRow}`}>
                                    <div className={styles.iconWrapper}>
                                        <FiMapPin />
                                    </div>
                                    <H3 className={styles.infoTitle}>Dirección</H3>
                                    <p>Puerto Real, Cádiz</p>
                                </div>
                            </div>
                            
                            <div className={styles.socials}>
                                <H3 className={styles.socialTitle}>SÍGUENOS</H3>
                                <div className={styles.socialIcons}>
                                    <a href="#" aria-label="Share">
                                        <FiShare2 />
                                    </a>
                                    <a href="#" aria-label="Website">
                                        <FiGlobe />
                                    </a>
                                    <a href="#" aria-label="Facebook">
                                        <FiInstagram />
                                    </a>
                                </div>
                            </div>

                            <div className={styles.mapBox}>
                                <img src="/contact-map.png" alt="Mapa de ubicación" />
                                <a href="https://www.google.com/maps/place/Puerto+Real,+C%C3%A1diz/@36.5278453,-6.2166547,13z" target="_blank" rel="noopener noreferrer" className={styles.mapBtn}>
                                    <FiMapPin /> Ver en Google Maps
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className={styles.formBox}>
                            <H2 kanit>Envíanos un mensaje</H2>
                            <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.formGrid}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="nombre">Nombre completo</label>
                                        <input type="text" id="nombre" name="nombre" placeholder="Ej: Juan Pérez" required />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="email">Email corporativo</label>
                                        <input type="email" id="email" name="email" placeholder="juan@empresa.com" required />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="empresa">Empresa</label>
                                        <input type="text" id="empresa" name="empresa" placeholder="Nombre de tu negocio" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="asunto">Asunto</label>
                                        <select id="asunto" name="asunto" defaultValue="Desarrollo Web">
                                            <option value="Desarrollo Web">Desarrollo Web</option>
                                            <option value="SEO">Auditoría SEO</option>
                                            <option value="Branding">Branding</option>
                                            <option value="Otro">Otro proyecto</option>
                                        </select>
                                    </div>
                                    <div className={`${styles.inputGroup} ${styles.full}`}>
                                        <label htmlFor="mensaje">Mensaje</label>
                                        <textarea id="mensaje" name="mensaje" placeholder="Hola, me gustaría tener más información para..." required></textarea>
                                    </div>
                                    <div className={`${styles.inputGroup} ${styles.full}`}>
                                        <button type="submit" className={styles.btnSubmit}>Enviar mensaje</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    );
}
