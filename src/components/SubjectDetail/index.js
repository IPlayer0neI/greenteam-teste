import styles from "./index.module.css";

export function SubjectDetail({ svg, title, children, gray = false }) {
    return (
        <div className={styles.detail}>
            <h4 className={styles.detailTitle}>
                {svg}
                {title}
            </h4>
            <div className={`${styles.detailParagraph} ${gray? styles.gray: ""}`}>
                {children}
            </div>
        </div>
    );
}