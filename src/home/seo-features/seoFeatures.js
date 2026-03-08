import Container from "@/components/content/container";
import H2 from "@/components/content/h2";
import Highlight from "@/components/content/highlight";
import styles from "@/styles/components/feature/feature.module.scss";
import Text from "@/components/content/text";
import Button from "../button/button";
import SubHeading from "@/components/content/subheading";

export default function SeoFeatures() {


    return (
        <Container large className={styles.root}>
            <div className={styles.title}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                <Highlight>Posicionamiento web</Highlight>
            </div>
            <div className={styles.content}>
                <div className={styles.contentHeading}>
                    <H2 title>Nuestra estrategia de trabajo SEO</H2>
                    <SubHeading>Sin humos y directo a lo que de verdad funciona</SubHeading>
                </div>
                <div className={styles.columns}>
                    <div className={styles.box}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    fill="#FFB800"
                                    d="M12,21.22754a.99676.99676,0,0,1-.707-.293L3.83691,13.47949A6.27234,6.27234,0,0,1,12,4a6.27234,6.27234,0,0,1,8.16309,9.47949L12.707,20.93457A.99676.99676,0,0,1,12,21.22754Z"
                                />
                            </svg>
                        </div>
                        <Text xl className={styles.boxTitle}>Investigación</Text>
                        <Text>Buscamos las palabras claves relevantes para tu negocio y mejoramos las de tu competencia</Text>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    fill="#FFB800"
                                    d="M12,21.22754a.99676.99676,0,0,1-.707-.293L3.83691,13.47949A6.27234,6.27234,0,0,1,12,4a6.27234,6.27234,0,0,1,8.16309,9.47949L12.707,20.93457A.99676.99676,0,0,1,12,21.22754Z"
                                />
                            </svg>
                        </div>
                        <Text xl className={styles.boxTitle}>Acción</Text>
                        <Text>Creamos una estrategia SEO completa para escalar a las primeras posiciones de manera profesional y organizada</Text>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    fill="#FFB800"
                                    d="M12,21.22754a.99676.99676,0,0,1-.707-.293L3.83691,13.47949A6.27234,6.27234,0,0,1,12,4a6.27234,6.27234,0,0,1,8.16309,9.47949L12.707,20.93457A.99676.99676,0,0,1,12,21.22754Z"
                                />
                            </svg>
                        </div>
                        <Text xl className={styles.boxTitle}>Resultados</Text>
                        <Text>Optimizamos el trabajo que ya hemos realizado y seguimos en constante mejora para alcanzar nuevos objetivos</Text>
                    </div>
                </div>
                <div className={styles.tags}>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Keyword Research</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>SEO Técnico</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Link Building</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Curación de contenidos</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>SEO Local</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Ecommerce</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Migraciones</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Auditoría SEO</Text>
                    </div>
                </div>
                <Button href={"https://lxb7f5dwsyt.typeform.com/to/e3ayzUDn"}>Solicita un presupuesto</Button>
            </div>
        </Container>
    )
}