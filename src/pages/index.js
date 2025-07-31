import { SubjectList } from "@/components/SubjectList";
import { Navigation } from "@/components/Navigation";
import { QuadIdeal } from "@/components/QudIdeal";
import { Subject } from "@/components/Subject";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

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
                const subjects = catalog
                  .filter(function (sub) {
                    return !(sub.SIGLA === "")
                  })
                  .map(function (sub) {
                    if (sub.SIGLA === "") {
                      sub.CATEGORIA = []
                      return sub
                    }
                    const category = categories.find(function (item) {
                      return item.SIGLA === sub.SIGLA
                    })

                    sub.CATEGORIA = category.CATEGORIA.split(";")
                      .map(function (word) {
                        return word.split(" ")[0]
                      })

                    return sub
                  })

                const quadIdeal = []

                for (let i = 1; i <= 15; i++) {
                  const quad = quadIdealRaw[i]

                  quad.map(function (sub) {
                    if (sub.SIGLA === "") {
                      sub.RECOMENDACAO = ""
                      return sub
                    }

                    const item = subjects.find(function (subjectRaw) {
                      return subjectRaw.SIGLA == sub.SIGLA
                    }) || { RECOMENDACAO: "" }

                    sub.RECOMENDACAO = item.RECOMENDACAO
                    return sub
                  })

                  quadIdeal.push(quad)
                }

                setSubjects(subjects)
                setSubject(subjects[0])
                setQuadideal(quadIdeal)
              })
          })
      })
  }, [])

  useEffect(function () {
    const newSubjectsBCC = subjects.filter(function (sub) {
      return sub.CATEGORIA.find(function (category) {
        return category == "BCC"
      })
    })

    setSubjectsBCC(newSubjectsBCC)
  }, [subjects])

  useEffect(function () {
    const newSubjectsBCT = subjects.filter(function (sub) {
      return sub.CATEGORIA.find(function (category) {
        return category == "BC&T"
      })
    })

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
