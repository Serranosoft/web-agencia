import styles from '@/styles/home/hero/horizontalCard.module.scss'
import { HiUserAdd } from "react-icons/hi";
import Text from "@/components/content/text";

export default function HorizontalCard() {

    return (
        <div className={`${styles.root}  aos-effect2-el`}>
            <div className={styles.content}>
                <div>
                    <HiUserAdd size={45} />
                    <Text xl={true}><strong>Marketing de contenidos</strong></Text>
                </div>
                <Text>Complementa la página web con servicios adicionales como <strong>Email marketing</strong> o <strong>Estrategias de conversión</strong>. Conseguimos aumentar tu marca y captar más clientes que generan más ventas. Guiamos a posibles clientes en todo momento sin pierdan el foco.</Text>
            </div>
        </div>
    )
}