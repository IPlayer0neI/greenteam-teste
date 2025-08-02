import Link from "next/link";
import styles from "./index.module.css";

export function TopicItem({ children, pathname, href }) {
    const active = pathname === href;
    return (
        <li className={styles.topicItem}>
            <Link href={href} className={`${styles.itemLink} ${active ? styles.activeLink : ""}`}>
                {children}
            </Link>
        </li>
    );
}
