import styles from "./index.module.css";

export function MenuItem({ title, children }) {
    return (
        <li>
            <h1 className={styles.menuTopicTitle}>
                {title}
            </h1>
            <ul>
                {children}
            </ul>
        </li>
    );
}