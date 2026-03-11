import { useEffect, useState } from "react"
import styles from "@/styles/designs/designs.module.scss";
import Container from "@/components/content/container";
import Head from "next/head";
import H1 from "@/components/content/h1";
import H2 from "@/components/content/h2";
import Text from "@/components/content/text";
import SubHeading from "@/components/content/subheading";
import Aos from "@/components/aos/aos";
import extraStyles from "@/styles/designs/extra.module.scss";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import {
    HiOutlineHome, HiOutlineSun,
    HiOutlineScissors, HiOutlineShoppingBag, HiOutlineSparkles,
    HiOutlineHeart, HiOutlineFire,
    HiOutlineAcademicCap, HiOutlineGift
} from 'react-icons/hi';
import {
    BiCar, BiDumbbell, BiDiamond, BiBeer, BiCoffee,
    BiCut, BiFootball, BiPrinter,
    BiWrench, BiBook,
    BiCartAlt, BiBaguette, BiCamera, BiLogoApple
} from 'react-icons/bi';
import {
    MdOutlineSpa, MdOutlinePets, MdOutlineLocalHospital, MdOutlineNightlife,
    MdOutlineLocalGroceryStore, MdOutlineLocalPharmacy, MdOutlineHardware,
    MdOutlineSportsTennis, MdOutlineDirectionsCar,
    MdOutlineMedicalServices, MdOutlineLiquor, MdOutlineLocalFlorist,
    MdOutlineStorefront, MdOutlineCardGiftcard
} from 'react-icons/md';
import { TbDental, TbMassage, TbToolsKitchen2, TbShoe, TbIceCream2, TbFish, TbShirt } from 'react-icons/tb';
import { FiKey } from 'react-icons/fi';
import { GiShrimp } from 'react-icons/gi';

export default function Designs() {

    const SECTORS_PER_PAGE = 8;
    const allSectors = [
        { Icon: FiKey,                     label: 'Administración de Propiedades' },
        { Icon: HiOutlineSun,              label: 'Agencia de Alquiler Vacacional' },
        { Icon: BiCar,                     label: 'Autoescuela' },
        { Icon: BiBeer,                    label: 'Bar / Pub / Coctelería' },
        { Icon: BiCut,                     label: 'Barbería' },
        { Icon: BiCoffee,                  label: 'Cafetería' },
        { Icon: HiOutlineShoppingBag,      label: 'Carnicería' },
        { Icon: MdOutlineSpa,              label: 'Centro de Estética' },
        { Icon: HiOutlineHeart,            label: 'Centro de Salud y Bienestar' },
        { Icon: HiOutlineFire,             label: 'Centro de Yoga' },
        { Icon: MdOutlineLocalHospital,    label: 'Clínica Ambulatoria' },
        { Icon: TbDental,                  label: 'Clínica Dental / Dentista' },
        { Icon: TbMassage,                 label: 'Clínica de Fisioterapia' },
        { Icon: MdOutlineSportsTennis,     label: 'Club de Pádel / Centro Deportivo' },
        { Icon: MdOutlineNightlife,        label: 'Club Nocturno' },
        { Icon: BiPrinter,                 label: 'Copistería / Papelería' },
        { Icon: MdOutlineLocalPharmacy,    label: 'Farmacia' },
        { Icon: MdOutlineHardware,         label: 'Ferretería' },
        { Icon: MdOutlineLocalFlorist,     label: 'Floristería' },
        { Icon: BiLogoApple,               label: 'Frutería' },
        { Icon: BiDumbbell,                label: 'Gimnasio' },
        { Icon: TbIceCream2,               label: 'Heladería' },
        { Icon: BiDiamond,                 label: 'Joyería' },
        { Icon: BiBook,                    label: 'Librería' },
        { Icon: GiShrimp,                  label: 'Marisquería' },
        { Icon: MdOutlineLocalGroceryStore,label: 'Mercado / Supermercado' },
        { Icon: BiBaguette,                label: 'Panadería / Pastelería' },
        { Icon: HiOutlineScissors,         label: 'Peluquería' },
        { Icon: HiOutlineSparkles,         label: 'Perfumería' },
        { Icon: TbFish,                    label: 'Pescadería' },
        { Icon: HiOutlineAcademicCap,      label: 'Residencia de Estudiantes' },
        { Icon: TbToolsKitchen2,           label: 'Restaurante' },
        { Icon: MdOutlineMedicalServices,  label: 'Asistencia Sanitaria Domiciliaria' },
        { Icon: BiWrench,                  label: 'Taller Mecánico' },
        { Icon: HiOutlineHome,             label: 'Tienda de Artículos para el Hogar' },
        { Icon: BiFootball,                label: 'Tienda de Deportes' },
        { Icon: BiCamera,                  label: 'Tienda de Fotografía' },
        { Icon: MdOutlineLiquor,           label: 'Tienda de Golosinas' },
        { Icon: TbShirt,                   label: 'Tienda de Lencería' },
        { Icon: TbShirt,                   label: 'Tienda de Moda / Ropa' },
        { Icon: MdOutlineDirectionsCar,    label: 'Tienda de Repuestos' },
        { Icon: MdOutlineCardGiftcard,     label: 'Tienda de Regalos' },
        { Icon: MdOutlinePets,             label: 'Veterinario' },
        { Icon: TbShoe,                    label: 'Zapatería' },
    ];
    const totalPages = Math.ceil(allSectors.length / SECTORS_PER_PAGE);
    const [sectorPage, setSectorPage] = useState(0);
    const visibleSectors = allSectors.slice(
        sectorPage * SECTORS_PER_PAGE,
        sectorPage * SECTORS_PER_PAGE + SECTORS_PER_PAGE
    );

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
                <title>Casos de éxito de tuwebencadiz.es</title>
                <meta name="description" content="Casos de éxito y portafolio de web y marketing por Kaoos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js"></script>
            </Head>

            {/* Main Hero Section */}
            <section className={extraStyles.heroWrapper}>
                <Container large>
                    <div className={extraStyles.heroContent}>
                        <div className={extraStyles.heroBadge}><span></span> Casos de Éxito</div>
                        <H1 title kanit className={extraStyles.heroTitle}>
                            Nuestros <span>Proyectos</span>
                        </H1>
                        <p className={extraStyles.heroDesc}>
                            Soluciones digitales innovadoras que impulsan el crecimiento de tu negocio a través de diseño estratégico y tecnología de vanguardia.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Featured Projects Section */}
            <section id="proyectos" className={extraStyles.wrapper}>
                <Container large>
                    <div className={extraStyles.featuredHeader}>
                        <H2 kanit title>Proyectos Destacados</H2>
                    </div>
                    <div className={extraStyles.projectGrid}>
                        <div className={extraStyles.projectCard}>
                            <div className={extraStyles.imageBox} style={{ background: '#f8ead2' }}>
                                <img src="/debocado.png" alt="E-commerce Pro" />
                            </div>
                            <div className={extraStyles.projectInfo}>
                                <h3>E-commerce Pro</h3>
                                <p>Rediseño completo y optimización de conversión para retail de moda.</p>
                            </div>
                        </div>
                        <div className={extraStyles.projectCard}>
                            <div className={extraStyles.imageBox} style={{ background: '#22c1db' }}>
                                <img src="/datasync.png" alt="SaaS Innovador" />
                            </div>
                            <div className={extraStyles.projectInfo}>
                                <h3>SaaS Innovador</h3>
                                <p>Arquitectura escalable y UI/UX moderna para startups tecnológicas.</p>
                            </div>
                        </div>
                        <div className={extraStyles.projectCard}>
                            <div className={extraStyles.imageBox} style={{ background: '#a0cdba' }}>
                                <img src="/humancopy.png" alt="HealthConnect" />
                            </div>
                            <div className={extraStyles.projectInfo}>
                                <h3>HealthConnect</h3>
                                <p>Interfaz intuitiva para gestión de pacientes y telemedicina.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Sectors Section */}
            <section className={extraStyles.grayWrapper}>
                <Container large>
                    <div className={extraStyles.sectorsHeader}>
                        <div className={extraStyles.sectorsTitleWrapper}>
                            <H2 kanit title>Sectores de especialización</H2>
                        </div>
                        <p className={extraStyles.desc}>
                            Experiencia profunda en verticales clave para entregar resultados que importan en tu industria.
                        </p>
                    </div>

                    <div className={extraStyles.sectorGrid}>
                        {visibleSectors.map((sector, i) => (
                            <div key={i} className={extraStyles.sectorCard}>
                                <span className={extraStyles.sectorIcon}>
                                    <sector.Icon size={26} />
                                </span>
                                <h3 className={extraStyles.sectorTitle}>{sector.label}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Pagination nav */}
                    <div className={extraStyles.sectorNav}>
                        <button
                            className={`${extraStyles.navBtn} ${sectorPage > 0 ? extraStyles.navBtnActive : ''}`}
                            onClick={() => setSectorPage(p => Math.max(0, p - 1))}
                            disabled={sectorPage === 0}
                            aria-label="Anterior"
                        >&#8592;</button>

                        <div className={extraStyles.sectorDots}>
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`${extraStyles.dot} ${i === sectorPage ? extraStyles.dotActive : ''}`}
                                    onClick={() => setSectorPage(i)}
                                    aria-label={`Página ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            className={`${extraStyles.navBtn} ${sectorPage < totalPages - 1 ? extraStyles.navBtnActive : ''}`}
                            onClick={() => setSectorPage(p => Math.min(totalPages - 1, p + 1))}
                            disabled={sectorPage >= totalPages - 1}
                            aria-label="Siguiente"
                        >&#8594;</button>
                    </div>
                </Container>
            </section>

            {/* Interactive GSAP Grids */}
            <Container fullscreen className={styles.root} style={{ padding: '4rem 1rem 8rem 1rem' }}>
                <div className={styles.header}>
                    <H2 title kanit style={{ color: "white" }}>Experiencia y Diseño Interactivo</H2>
                    <SubHeading style={{ color: "rgba(255, 255, 255, 0.7)" }}>Clica en cada elemento para ver el diseño a pantalla completa.</SubHeading>
                </div>
                <div className={styles.group}>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(/debocado.png)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(/datasync.png)" }}></div>
                    <video className={`${styles.item} item`} src="/dragsa-old.mp4" autoPlay loop muted />
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(/pomtoy.png)" }}></div>
                </div>


                <div className={styles.group}>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(/crypto-experto.png)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(/eye2.jpg)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(/hero-mockup.png)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(/luxefurniture.png)" }}></div>
                </div>
            </Container>

            {/* CTA Section */}
            <section className={extraStyles.yellowWrapper}>
                <Container large>
                    <div className={extraStyles.ctaContent}>
                        <h2 className={extraStyles.ctaTitle}>¿Tienes un proyecto en mente?</h2>
                        <p className={extraStyles.ctaDesc}>
                            Estamos listos para transformar tus ideas en realidades digitales de alto impacto. Hablemos sobre cómo podemos ayudarte.
                        </p>
                        <div className={extraStyles.ctaButtons}>
                            <Link href="/contacto" className={extraStyles.btnDark}>
                                Iniciar mi Proyecto
                            </Link>
                            <Link href="/contacto" className={extraStyles.btnOutline}>
                                Agendar una Llamada
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    )
}