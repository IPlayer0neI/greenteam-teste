import styles from "./index.module.css"

export function QuadItem({ title, acronym, tpei }) {
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
        </li>
    )
}