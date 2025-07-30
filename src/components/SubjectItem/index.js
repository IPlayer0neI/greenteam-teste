import styles from "./index.module.css"

export function SubjectItem({ title, acronym, course, tpei, active, handleClick }) {
    return (
        <div className={`${styles.subject} ${active? styles.blue: ""}`} onClick={handleClick}>
            <h3 className={styles.subjectTitle}>
                {title}
            </h3>
            <div className={styles.tags}>
                <span className={styles.tag}>{acronym}</span>
                <span className={`${styles.tag} ${styles.green}`}>{course}</span>
            </div>
            <div className={styles.tpei}>
                TPEI {tpei}
            </div>
        </div>
    )
}