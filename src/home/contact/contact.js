import styles from '@/styles/home/contact/contact.module.scss'
import Container from '@/components/content/container'
import H2 from '@/components/content/h2'
import { HiMail, HiLocationMarker } from 'react-icons/hi'

export default function Contact() {
    return (
        <section id="contacto" className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.root}>
                    <div className={styles.content}>
                        <H2 title className={styles.title}>¿Listo para escalar tu presencia digital?</H2>
                        <p className={styles.description}>
                            Reserva una llamada de descubrimiento de 30 minutos para discutir tu proyecto y recibir una auditoría de rendimiento gratuita.
                        </p>
                        
                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <HiMail />
                                </div>
                                <span>info@tuwebencadiz.es</span>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <HiLocationMarker />
                                </div>
                                <span>Puerto Real, Cádiz</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formArea}>
                        <form className={styles.form} onClick={(e) => e.preventDefault()}>
                            <div className={styles.formRow}>
                                <div className={styles.inputGroup}>
                                    <label>Nombre completo</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Email</label>
                                    <input type="email" placeholder="john@company.com" />
                                </div>
                            </div>
                            
                            <div className={styles.inputGroup}>
                                <label>Servicio Necesario</label>
                                <select>
                                    <option>Desarrollo Web</option>
                                    <option>Estrategia SEO</option>
                                    <option>Marketing Digital</option>
                                    <option>Consultoría</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Descripción del proyecto</label>
                                <textarea placeholder="Cuéntanos sobre tus objetivos..."></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Enviar Solicitud
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}
