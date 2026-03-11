import styles from '@/styles/components/content/button.module.scss'
import Link from 'next/link'

export default function Button({ children, className, highlight, darkOutline, to, target }) {


    return (
        <>
            {
                to ? 
                    <Link target={target} href={to} className={`${styles.button} ${highlight && styles.highlight} ${darkOutline && styles.darkOutline} ${className && className}`}>
                        {children}
                    </Link>
                :
                <button className={`${styles.button} ${className && className} ${highlight && styles.highlight} ${darkOutline && styles.darkOutline}`}>
                    {children}
                </button>

                
            }
        </>
        
    )
}