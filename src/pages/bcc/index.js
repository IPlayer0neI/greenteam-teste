import styles from "@/styles/Home.module.css";
import { SubjectList } from "@/components/SubjectList";
import { Navigation } from "@/components/Navigation";
import { Subject } from "@/components/Subject";
import { useEffect, useState } from "react";
import { useSubjects } from "@/context";
import { filterSubjects } from "@/utils/filterSubjects";

export default function Bcc() {
    const [search, setSearch] = useState("");
    const [subjectsBCC, setSubjectsBCC] = useState([]);
    const { subjects, subject, setSubject } = useSubjects();

    useEffect(function () {
        const newSubjectsBCC = filterSubjects(subjects, "BCC");

        setSubjectsBCC(newSubjectsBCC)
        setSubject(newSubjectsBCC[0])
    }, [subjects])

    return (
        <div className={styles.home}>
            <Navigation search={search} setSearch={setSearch} />
            <SubjectList subjects={subjectsBCC} search={search} subject={subject} setSubject={setSubject} />
            <Subject subject={subject} />
        </div>
    );
}