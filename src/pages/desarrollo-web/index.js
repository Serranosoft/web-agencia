import { useEffect } from "react"
import styles from "@/styles/designs/designs.module.scss";
import Container from "@/components/content/container";
import Head from "next/head";
import H1 from "@/components/content/h1";
import Text from "@/components/content/text";
import Bento from "@/designs/bento";
import SubHeading from "@/components/content/subheading";
import Stack from "@/designs/stack";
import Aos from "@/components/aos/aos";

export default function Designs() {

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = document.querySelectorAll('.item')

            const expand = (item, i) => {
                items.forEach((it, ind) => {
                    if (i === ind) return
                    it.clicked = false
                })

                console.log(window.matchMedia("(max-width: 980px)"));
                gsap.to(items, {
                    width: item.clicked ? window.matchMedia("(max-width: 980px)").matches ? '95vw' : '20vw' : window.matchMedia("(max-width: 980px)").matches ? '60vw' : '18vw',
                    borderRadius: "3vw",
                    duration: 2,
                    ease: 'elastic(1, .6)'
                })

                item.clicked = !item.clicked
                gsap.to(item, {
                    width: item.clicked ? window.matchMedia("(max-width: 980px)").matches ? '95vw' : '40vw' : window.matchMedia("(max-width: 980px)").matches ? '60vw' : '15vw',
                    borderRadius: item.clicked ? "0rem" : "3vw",
                    duration: 2.5,
                    ease: 'elastic(1, .3)'
                })
            }

            items.forEach((item, i) => {
                item.clicked = false
                item.addEventListener('click', () => expand(item, i))
            })

        }, [])

        return () => ctx.revert();
    }, [])


    return (
        <>
            <Aos />
            <Head>
                <title>Portfolio de diseños y bocetos de Kaoos</title>
                <meta name="description" content="Galería de diseños desarrollados por la agencia web Kaoos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js"></script>
            </Head>
            <Container fullscreen className={styles.root}>
                <div className={styles.bg}></div>
                <div className={styles.header}>
                    <H1 title kanit>Portfolio de diseños y bocetos</H1>
                    <SubHeading>Clica en cada elemento para ver el diseño completo.</SubHeading>
                </div>
                <div className={styles.group}>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                    <video className={`${styles.item} item`} src="/dragsa-old.mp4" autoPlay loop muted />
                    <div className={`${styles.item} item`}></div>
                </div>

                <Bento />

                <div className={styles.group}>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                </div>

                <Stack />

                <div className={styles.group}>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                    <div className={`${styles.item} item`}></div>
                </div>
            </Container>

        </>
    )
}