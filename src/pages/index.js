import { SubjectList } from "@/components/SubjectList";
import { Navigation } from "@/components/Navigation";
import { QuadIdeal } from "@/components/QudIdeal";
import { Subject } from "@/components/Subject";
import styles from "@/styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";
import { mixResponses } from "@/filters/mixResponses";

export default function Home() {
  const [page, setPage] = useState("subject")
  const [search, setSearch] = useState("")
  const [subject, setSubject] = useState()
  const [subjects, setSubjects] = useState([])
  const [subjectsBCT, setSubjectsBCT] = useState([])
  const [subjectsBCC, setSubjectsBCC] = useState([])
  const [quadIdeal, setQuadideal] = useState([])

  useEffect(function () {
    fetch("http://localhost:3001/categorias")
      .then((res) => res.json())
      .then(function (categories) {
        fetch("http://localhost:3001/catalogo")
          .then((res) => res.json())
          .then(function (catalog) {
            fetch("http://localhost:3001/quadideal")
              .then((res) => res.json())
              .then(function (quadIdealRaw) {
                const { subjects, quadIdeal } = mixResponses(categories, catalog, quadIdealRaw)

                setSubjects(subjects)
                setSubject(subjects[0])
                setQuadideal(quadIdeal)
              })
          })
      })
  }, [])

  const filterSubjects = useCallback(function (query) {
    return subjects.filter(function (sub) {
      return sub.CATEGORIA.find(function (category) {
        return category == query
      })
    })
  }, [subjects])

  useEffect(function () {
    const newSubjectsBCC = filterSubjects("BCC")

    setSubjectsBCC(newSubjectsBCC)
  }, [subjects])

  useEffect(function () {
    const newSubjectsBCT = filterSubjects("BC&T")

    setSubjectsBCT(newSubjectsBCT)
  }, [subjects])

  return (
    <div className={styles.home}>
      <Navigation
        page={page}
        setPage={setPage}
        search={search} setSearch={setSearch}
      />
      {
        page == "subject" ? (
          <>
            <SubjectList subjects={subjects} search={search} subject={subject} setSubject={setSubject} />
            <Subject subject={subject} />
          </>
        ) : ""
      }
      {
        page == "quadIdeal" ? (
          <QuadIdeal quadIdeal={quadIdeal} />
        ) : ""
      }
      {
        page == "todas" ? (
          <>
            <SubjectList subjects={subjects} search={search} subject={subject} setSubject={setSubject} />
            <Subject subject={subject} />
          </>
        ) : ""
      }
      {
        page == "BC&T" ? (
          <>
            <SubjectList subjects={subjectsBCT} search={search} subject={subject} setSubject={setSubject} />
            <Subject subject={subject} />
          </>
        ) : ""
      }
      {
        page == "BCC" ? (
          <>
            <SubjectList subjects={subjectsBCC} search={search} subject={subject} setSubject={setSubject} />
            <Subject subject={subject} />
          </>
        ) : ""
      }
    </div>
  );
}
