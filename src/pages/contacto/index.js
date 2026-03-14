import Head from "next/head";
import Container from "@/components/content/container";
import Aos from "@/components/aos/aos";
import Footer from "@/components/footer/footer";
import H1 from "@/components/content/h1";
import H3 from "@/components/content/h3";
import styles from "@/styles/contacto/contacto.module.scss";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contacto() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = {
            nombre: e.target.nombre.value,
            email: e.target.email.value,
            empresa: e.target.empresa.value,
            asunto: e.target.asunto.value,
            mensaje: e.target.mensaje.value,
        };

        try {
            const response = await fetch('/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };
    return (
        <>
            <Aos />
            <Head>
                <title>Contacto - Agencia</title>
                <meta name="description" content="Ponte en contacto con nuestro equipo de expertos para llevar tu proyecto al siguiente nivel." />
            </Head>

            <section className={styles.wrapper}>
                <Container large>
                    <div className={styles.innerBox}>
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
                                        <p>info@tuwebencadiz.es</p>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <div className={styles.iconWrapper}><HiPhone /></div>
                                        <H3>Teléfono</H3>
                                        <p>644 466 492</p>
                                    </div>
                                    <div className={`${styles.infoItem} ${styles.addressCard}`}>
                                        <div className={styles.iconWrapper}><HiLocationMarker /></div>
                                        <H3>Dirección</H3>
                                        <p>Puerto Real, Cádiz</p>
                                    </div>
                                </div>

                                <div className={styles.socialSection}>
                                    <p>CONECTA CON NOSOTROS</p>
                                    <div className={styles.socialIcons}>
                                        <a href="https://www.linkedin.com/in/paula-quintana-36856b204/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                            <FaLinkedin />
                                        </a>
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
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <div className={styles.formRow}>
                                        <div className={styles.inputGroup}>
                                            <label>Nombre completo</label>
                                            <input type="text" name="nombre" placeholder="Ej. Juan Pérez" required />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label>Email corporativo</label>
                                            <input type="email" name="email" placeholder="juan@empresa.com" required />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.inputGroup}>
                                            <label>Empresa</label>
                                            <input type="text" name="empresa" placeholder="Nombre de tu negocio" />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label>Asunto</label>
                                            <select name="asunto">
                                                <option value="Desarrollo Web">Desarrollo Web</option>
                                                <option value="Diseño UX/UI">Diseño UX/UI</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Otro">Otro</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label>Mensaje</label>
                                        <textarea name="mensaje" placeholder="Cuéntanos en qué te podemos ayudar..." required></textarea>
                                    </div>

                                    <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                                        {status === 'loading' ? 'Enviando...' : status === 'success' ? '¡Mensaje Enviado!' : 'Enviar mensaje'}
                                    </button>
                                    {status === 'error' && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '1rem', textAlign: 'center' }}>Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    );
}
