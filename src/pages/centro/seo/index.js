import Button from "@/components/content/button";
import Container from "@/components/content/container";
import H1 from "@/components/content/h1";
import SubHeading from "@/components/content/subheading";
import Text from "@/components/content/text";
import styles from "@/styles/centro/seo/seo.module.scss";
import { Kanit } from "next/font/google";
import Link from "next/link";

const title = Kanit({ subsets: ['latin'], weight: ["700", "900"] })

export default function Seo() {

    return (
        <Container fullscreen className={styles.root}>
            <div>
                <div className={styles.hero}>
                    <div>
                        <H1 kanit>SEO Marketing Hub 2.0</H1>
                        <Text xl>Ya sea que sea nuevo en SEO o quiera aprender estrategias avanzadas, este es su centro de conocimiento de SEO.</Text>
                        <Button href="/centro/seo" highlight>Empezar ahora</Button>
                    </div>
                    <img src="" alt="marketing-seo" />
                </div>

                <div className={styles.content}>
                    <div className={styles.box}>
                        <Link href="/centro/seo">
                            <Text xxl kanit>Iniciación en SEO</Text>
                            <img src="" alt="seo-fundamentals" />
                        </Link>
                        <div className={styles.index}>
                            <div className={styles.summary}>
                                <Text xl>¿Qué aprenderás?</Text>
                                <Text>Aprenda los conceptos básicos de SEO en un solo lugar, incluido el rastreo, la indexación, las señales de clasificación del motor de búsqueda, la elección de palabras clave, la actualización del contenido, el texto de anclaje y más.</Text>
                            </div>
                            <div className={styles.indexItems}>
                                <Text xl>8 Recursos</Text>
                                <ul>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="css-15d17o1"><path d="M15 10l-9 5V5l9 5z"></path></svg><Link href="/centro/seo"><Text>¿Qué es SEO?</Text></Link></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="css-15d17o1"><path d="M15 10l-9 5V5l9 5z"></path></svg><Link href="/centro/seo"><Text>Posicionamiento en buscadores</Text></Link></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="css-15d17o1"><path d="M15 10l-9 5V5l9 5z"></path></svg><Link href="/centro/seo"><Text>SEO frente a SEM</Text></Link></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="css-15d17o1"><path d="M15 10l-9 5V5l9 5z"></path></svg><Link href="/centro/seo"><Text>Factores de posicionamiento</Text></Link></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="css-15d17o1"><path d="M15 10l-9 5V5l9 5z"></path></svg><Link href="/centro/seo"><Text>Mejores prácticas de SEO</Text></Link></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="css-15d17o1"><path d="M15 10l-9 5V5l9 5z"></path></svg><Link href="/centro/seo"><Text>Métricas SEO</Text></Link></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="css-15d17o1"><path d="M15 10l-9 5V5l9 5z"></path></svg><Link href="/centro/seo"><Text>Diseño web amigable con SEO</Text></Link></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="css-15d17o1"><path d="M15 10l-9 5V5l9 5z"></path></svg><Link href="/centro/seo"><Text>¿Qué son las SERP?</Text></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}