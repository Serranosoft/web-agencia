import styles from '@/styles/home/contact/contact.module.scss'
import Container from '@/components/content/container'
import H2 from '@/components/content/h2'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { useState } from 'react'

export default function Contact() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = {
            nombre: e.target.nombre.value,
            email: e.target.email.value,
            servicio: e.target.servicio.value,
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
        <section id="contacto" className={styles.wrapper}>
            <Container large={true}>
                <div className={styles.root}>
                    <div className={styles.content}>
                        <H2 title className={styles.title}>¿Necesitas una página web para tu negocio?</H2>
                        <p className={styles.description}>
                            Si quieres mejorar tu presencia online y conseguir más clientes, podemos ayudarte.<br/><br/>
                            Solicita tu presupuesto de diseño web en Cádiz sin compromiso y estudiaremos tu proyecto.
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
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <div className={styles.inputGroup}>
                                    <label>Nombre completo</label>
                                    <input type="text" name="nombre" placeholder="John Doe" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="john@company.com" required />
                                </div>
                            </div>
                            
                            <div className={styles.inputGroup}>
                                <label>Servicio Necesario</label>
                                <select name="servicio">
                                    <option value="Desarrollo Web">Desarrollo Web</option>
                                    <option value="Estrategia SEO">Estrategia SEO</option>
                                    <option value="Marketing Digital">Marketing Digital</option>
                                    <option value="Consultoría">Consultoría</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Descripción del proyecto</label>
                                <textarea name="mensaje" placeholder="Cuéntanos sobre tus objetivos..." required></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                                {status === 'loading' ? 'Enviando...' : status === 'success' ? '¡Solicitud Enviada!' : 'Solicitar presupuesto'}
                            </button>
                            {status === 'error' && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '1rem', textAlign: 'center' }}>Hubo un error al enviar tu solicitud.</p>}
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}
