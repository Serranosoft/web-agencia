import styles from "@/styles/home/button/button.module.scss"
import Link from "next/link"

export default function Button({ children, href, secondary, className }) {
    return (
        <Link 
            href={href || '/'} 
            className={`${styles.root} ${secondary ? styles.secondary : ''} ${className || ''}`}
        >
            {children}
        </Link>
    )
}