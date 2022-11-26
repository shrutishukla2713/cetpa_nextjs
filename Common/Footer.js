import React from 'react'
import styles from '../styles/Footer.module.scss'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p>
                Next.js app with a&nbsp;<a href="https://www.myntra.com/?utm_source=dms_google&utm_medium=searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK&gclid=EAIaIQobChMI0L3-mtPL-wIVqYZLBR30AgEsEAAYASAAEgLvNvD_BwE">Myntra</a>&nbsp;- powered store
            </p>
            <div className={styles.footer__left}>
                <a href="https://github.com/shrutishukla2713/cetpa_nextjs.git">Github</a>
            </div>
        </footer>
    )
}