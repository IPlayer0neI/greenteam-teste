import styles from "./index.module.css"

export function MenuTopic({ title, children }) {
    return (
        <li>
            <h1 className={styles.menuTopicTitle}>
                {title}
            </h1>
            <ul>
                {children}
            </ul>
        </li>
    )
}