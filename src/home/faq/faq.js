import Container from "@/components/content/container";
import H2 from "@/components/content/h2";
import styles from "@/styles/home/faq/faq.module.scss"
import { useState } from "react";
import { HiPlus } from "react-icons/hi";

const defaultFaqItems = [
    {
        question: "¿Cuánto tiempo dura el desarrollo de una web?",
        answer: "La mayoría de los proyectos web sencillos duran unas dos semanas, dependiendo de la complejidad y las integraciones de terceros requeridas."
    },
    {
        question: "¿Qué tipo de resultados podemos esperar del SEO?",
        answer: "El SEO es una inversión a largo plazo. La mayoría de los clientes ven un aumento significativo en el tráfico orgánico y la calidad de los leads varios meses después de la implementación de la estrategia."
    },
    {
        question: "¿Trabajan con plataformas CMS?",
        answer: "Si, tenemos experiencia con Wordpress, Shopify y otras plataformas. Aunque, nos especializamos más en páginas diseñadas desde 0."
    }
]

export default function Faq({ 
    items = defaultFaqItems, 
    title = "Preguntas Frecuentes", 
    badge = "FAQ" 
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.wrapper}>
            <Container id="preguntas-frecuentes" large={true}>
                <div className={styles.header}>
                    <p className={styles.badge}>{badge}</p>
                    <H2 title className={styles.title}>{title}</H2>
                </div>

                <div className={styles.accordion}>
                    {items.map((item, index) => (
                        <div 
                            key={index} 
                            className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className={styles.questionLine}>
                                <h3 className={styles.question}>{item.question}</h3>
                                <HiPlus className={styles.icon} />
                            </div>
                            <div className={styles.answerWrapper}>
                                <p className={styles.answer}>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}