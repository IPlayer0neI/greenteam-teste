import styles from "./index.module.css";

export function SubjectItem({ subjectItem, active, handleClick }) {
    return (
        <div className={`${styles.subject} ${active? styles.blue: ""}`} onClick={handleClick}>
            <h3 className={styles.subjectTitle}>
                {subjectItem.DISCIPLINA}
            </h3>
            <div className={styles.tags}>
                <span className={styles.tag}>{subjectItem.SIGLA}</span>
                <span className={`${styles.tag} ${styles.green}`}>{subjectItem.CATEGORIA[0]}</span>
            </div>
            <div className={styles.tpei}>
                TPEI: {subjectItem.TPEI}
            </div>
        </div>
    );
}