import { useCallback } from "react"
import styles from "./index.module.css"
import { MenuItem } from "../MenuItem"
import { TopicItem } from "../TopicItem"

export function Navigation({ search, setSearch, page, setPage }) {
    const link = useCallback(function (type) {
        return function () {
            setPage(type)
        }
    }, [setPage])

    function handleChange(event) {
        setSearch(event.target.value)
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.navTop}>
                <div className={styles.navTitle}>
                    <img src="./logo_ufabc.png" />
                    <h1 className={styles.navTitleText}>
                        UFABC
                    </h1>
                </div>
                <div className={styles.inputContainer}>
                    <input placeholder="Buscar matérias..." type="text" className={styles.search} value={search} onChange={handleChange}>
                    </input>
                    <button className={styles.searchButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                    </button>
                </div>
            </div>
            <ul className={styles.menu}>
                <MenuItem title="NAVEGAÇÃO">
                    <TopicItem isActive={page == "subject"} onClick={link("subject")}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-icon lucide-book-open"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>
                        </span>
                        Matérias
                    </TopicItem>
                    <TopicItem isActive={page == "quadIdeal"} onClick={link("quadIdeal")}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                        </span>
                        Quad Ideal
                    </TopicItem>
                </MenuItem>
                <MenuItem title="CATEGORIAS">
                    <TopicItem isActive={page == "todas"} onClick={link("todas")}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid3x3-icon lucide-grid-3x3"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M9 3v18" /><path d="M15 3v18" /></svg>
                        </span>
                        Todas as Matérias
                    </TopicItem>
                    <TopicItem isActive={page == "BC&T"} onClick={link("BC&T")}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2" /><path d="M12 2v2" /><path d="M17 20v2" /><path d="M17 2v2" /><path d="M2 12h2" /><path d="M2 17h2" /><path d="M2 7h2" /><path d="M20 12h2" /><path d="M20 17h2" /><path d="M20 7h2" /><path d="M7 20v2" /><path d="M7 2v2" /><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="8" y="8" width="8" height="8" rx="1" /></svg>
                        </span>
                        Ciência e Tecnologia
                    </TopicItem>
                    <TopicItem isActive={page == "BCC"} onClick={link("BCC")}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg>
                        </span>
                        Bacharelado em Ciência da Computação
                    </TopicItem>
                </MenuItem>
            </ul >
        </nav >
    )
}