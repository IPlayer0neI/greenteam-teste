import { SubjectItem } from "../SubjectItem"
import styles from "./index.module.css"


export function SubjectList({ subjects, search, subject, setSubject }) {
    const filterSubjects = subjects
        .filter(function (subject) {
            return subject.DISCIPLINA.toLowerCase().includes(search.toLowerCase())
        });

    return (
        <aside className={styles.subjects}>
            <div className={styles.subjectsTop}>
                <h2 className={styles.subjectsTitle}>
                    Matérias ({filterSubjects.length})
                </h2>
            </div>
            <div className={styles.subjectsList}>
                {
                    filterSubjects.map(function (subjectItem) {
                        const active = subject && subjectItem.SIGLA == subject.SIGLA

                        function handleClick(){
                            setSubject(subjectItem);
                        }

                        return (
                            <SubjectItem handleClick={handleClick} title={subjectItem.DISCIPLINA} active={active} acronym={subjectItem.SIGLA} tpei={subjectItem.TPEI} course={subjectItem.CATEGORIA[0]} key={subjectItem.SIGLA} />
                        )
                    })
                }
            </div>
        </aside>
    )
}