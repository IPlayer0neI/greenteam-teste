import { Quad } from "../Quad"
import styles from "./index.module.css"

export function QuadIdeal({ quadIdeal }) {

    console.log(quadIdeal)
    if(!quadIdeal){
        return ""
    }

    return (
        <div className={styles.quadIdeal}>
            <div className={styles.quadIdealTop}>
                <h1 className={styles.quadIdealTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                    Recomendação por Quadrimestre
                </h1>
            </div>
            {
                quadIdeal.map(function(quadSubjects, index){
                    return <Quad quad={index + 1} quadSubjects={quadSubjects}/>
                })
            }
        </div>
    )
}