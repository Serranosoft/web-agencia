import styles from "@/styles/home/button/button.module.scss"
import Link from "next/link"

export default function Button({ children, href, secondary, className, target, ...props }) {
    return (
        <Link 
            href={href || '/'} 
            target={target}
            className={`${styles.root} ${secondary ? styles.secondary : ''} ${className || ''}`}
            {...props}
        >
            {children}
        </Link>
    )
}