import Container from "@/components/content/container";
import H2 from "@/components/content/h2";
import Highlight from "@/components/content/highlight";
import styles from "@/styles/components/feature/feature.module.scss";
import Text from "@/components/content/text";
import Button from "../button/button";
import SubHeading from "@/components/content/subheading";

export default function DesignFeatures() {


    return (
        <Container large className={styles.root}>
            <div className={styles.title}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                <Highlight>Diseño y desarrollo web</Highlight>
            </div>
            <div className={styles.content}>
                <div className={styles.contentHeading}>
                    <H2 title>El diseño de tu negocio define lo que realmente eres</H2>
                    <SubHeading line>Y los objetivos que puedes lograr</SubHeading>
                </div>
                {/* Poner el texto anterior en gris y tachado igual que el hero */}
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
                        <Text xl className={styles.boxTitle}>Planificación</Text>
                        <Text>Hacemos una recopilación de ideas para el estilo que puede ir acorde al negocio</Text>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.icon}>
                            {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    fill="#FFB800"
                                    d="M12,21.22754a.99676.99676,0,0,1-.707-.293L3.83691,13.47949A6.27234,6.27234,0,0,1,12,4a6.27234,6.27234,0,0,1,8.16309,9.47949L12.707,20.93457A.99676.99676,0,0,1,12,21.22754Z"
                                />
                            </svg>
                        </div>
                        <Text xl className={styles.boxTitle}>Branding</Text>
                        <Text>Creamos una estrategia visual para crear una marca reconocida e irremplazable </Text>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.icon}>
                            {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    fill="#FFB800"
                                    d="M12,21.22754a.99676.99676,0,0,1-.707-.293L3.83691,13.47949A6.27234,6.27234,0,0,1,12,4a6.27234,6.27234,0,0,1,8.16309,9.47949L12.707,20.93457A.99676.99676,0,0,1,12,21.22754Z"
                                />
                            </svg>
                        </div>
                        <Text xl className={styles.boxTitle}>Diseño</Text>
                        <Text>Diseñamos la web con el estilo de la marca y desarrollamos las funcionalidades necesarias</Text>
                    </div>
                </div>
                <div className={styles.tags}>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Programación y funcionalidad</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Animaciones y transiciones</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Colores y tipografías</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Ilustraciones e iconos</Text>
                    </div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#FFB800"></path></svg>
                        <Text>Catalógo para ayudarte a tomar decisiones</Text>
                    </div>
                </div>
            </div>
        </Container>
    )
}