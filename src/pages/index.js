import styles from "@/styles/Home.module.css";
import { SubjectList } from "@/components/SubjectList";
import { Navigation } from "@/components/Navigation";
import { Subject } from "@/components/Subject";
import { useState } from "react";
import { useSubjects } from "@/context";

export default function Home() {
  const [search, setSearch] = useState("");
  const { subjects, subject, setSubject } = useSubjects();

  return (
    <div className={styles.home}>
      <Navigation search={search} setSearch={setSearch} />
      <SubjectList subjects={subjects} search={search} subject={subject} setSubject={setSubject} />
      <Subject subject={subject} />
    </div>
  );
}