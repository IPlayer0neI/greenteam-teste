import styles from "@/styles/Home.module.css";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { useSubjects } from "@/context";
import { Ideal } from "@/components/Ideal";

export default function QuadIdeal() {
    const [search, setSearch] = useState("");
    const { quadIdeal } = useSubjects();

    return (
        <div className={styles.home}>
            <Navigation search={search} setSearch={setSearch}/>
            <Ideal quadIdeal={quadIdeal}/>
        </div>
    );
}