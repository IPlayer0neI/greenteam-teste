import styles from "./index.module.css"

export function TopicItem({ children, isActive, onClick }) {
    return (
        <li className={styles.topicItem} onClick={onClick}>
            <a className={`${styles.itemLink} ${isActive ? styles.activeLink : ""}`}>
                {children}
            </a>
        </li>
    )
}
