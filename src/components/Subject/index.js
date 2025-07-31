import styles from "./index.module.css"

export function Subject({ subject }) {
    if (!subject) {
        return ""
    }

    return (
        <div className={styles.subject}>
            <div className={styles.subjectTop}>
                <h1 className={styles.subjectTitle}>
                    {subject.DISCIPLINA}
                </h1>
                <div className={styles.tags}>
                    <div className={styles.tag}>
                        {subject.SIGLA}
                    </div>
                    <div className={`${styles.tag} ${styles.green}`}>
                        {subject.CATEGORIA[0]}
                    </div>
                </div>
                <div className={styles.tpei}>
                    TPEI: {subject.TPEI}
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.detail}>
                    <h4 className={styles.detailTitle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target-icon lucide-target"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                        Objetivos
                    </h4>
                    <p className={styles.detailParagraph}>
                        {subject.OBJETIVOS}
                    </p>
                </div>
                <div className={styles.detail}>
                    <h4 className={styles.detailTitle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-icon lucide-book-open"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>
                        Ementa
                    </h4>
                    <p className={styles.detailParagraph}>
                        {subject.EMENTA}
                    </p>
                </div>
                <div className={styles.detail}>
                    <h4 className={styles.detailTitle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
                        Cursos
                    </h4>
                    <div className={styles.detailParagraph}>
                        <div>
                            {
                                subject.CATEGORIA.map(function (categoria) {
                                    if (!categoria) {
                                        return ""
                                    }

                                    return (
                                        <div className={`${styles.tag} ${styles.gray}`} key={categoria}>
                                            {categoria}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.bibliography}>
                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
                            Bibliografia Básica
                        </h4>
                        <div className={`${styles.detailParagraph} ${styles.bibliographyList}`}>
                            {subject.BIBLIOGRAFIA_BASICA}
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
                            Bibliografia Complementar
                        </h4>
                        <div className={`${styles.detailParagraph} ${styles.bibliographyList}`}>
                            {subject.BIBLIOGRAFIA_COMPLEMENTAR}
                        </div>
                    </div>
                </div>
                <div className={styles.detail}>
                    <h4 className={styles.detailTitle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
                        Informações Adicionais
                    </h4>
                    <div className={styles.detailParagraph}>
                        <span className={styles.textBold}>Recomendação:</span> {subject.RECOMENDACAO}
                        <div className={styles.line}></div>
                        <span className={styles.textBold}>Metodologia:</span>
                        <div>
                            {subject.METODOLOGIA_EXTENSIONISTA}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}