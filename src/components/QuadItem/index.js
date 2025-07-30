import styles from "./index.module.css"

export function QuadItem({ title, acronym, tpei, recommendation }) {
    return (
        <li className={styles.quadSubject}>
            <div className={styles.quadSubjectTitle}>
                {title}
                {
                    acronym === "" ? "" :
                        <div className={styles.tag}>
                            {acronym}
                        </div>
                }
            </div>
            <div className={styles.tpei}>
                TPEI {tpei}
            </div>
            <div className={styles.recommendation}>
                {
                recommendation === ""? 
                ""
                :`Recomendação: ${recommendation}`
                }
            </div>
        </li>
    )
}