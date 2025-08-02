import styles from "./index.module.css";
import { QuadItem } from "../QuadItem";

export function Quad({ quad, quadSubjects }) {

    if(!quadSubjects){
        return "";
    }

    return (
        <div className={styles.quad}>
            <div className={styles.quadTop}>
                <h3 className={styles.title}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock4-icon lucide-clock-4"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
                    {quad}° Quadrimestre</h3>
                <p className={styles.description}>
                    Matrícula automática. Inclui disciplinas obrigatórias do BC&T e Eixo Humanidades.
                </p>
            </div>
            <ul className={styles.quadmaterials}>
                {
                    quadSubjects.map(function(subject){
                        return (
                            <QuadItem subject={subject} key={subject.SIGLA}/>
                        )
                    })
                }
            </ul>
        </div>
    );
}