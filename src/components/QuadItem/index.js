import styles from "./index.module.css";

export function QuadItem({ subject }) {
    return (
        <li className={styles.quadSubject}>
            <div className={styles.quadSubjectTitle}>
                {subject.DISCIPLINA}
                {
                    subject.SIGLA === "" ? "" :
                        <div className={styles.tag}>
                            {subject.SIGLA}
                        </div>
                }
            </div>
            <div className={styles.tpei}>
                TPEI {subject.TPEI}
            </div>
            <div className={styles.recommendation}>
                {
                    subject.RECOMENDACAO === "" ?
                        ""
                        : `Recomendação: ${subject.RECOMENDACAO}`
                }
            </div>
        </li>
    );
}