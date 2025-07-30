import { SubjectList } from "@/components/SubjectList";
import { Navigation } from "@/components/NavigationMenu";
import { QuadIdeal } from "@/components/QudIdeal";
import { Subject } from "@/components/Subject";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("subject")
  const [search, setSearch] = useState("")
  const [subject, setSubject] = useState()
  const [subjects, setSubjects] = useState([])
  const [quadIdeal, setQuadideal] = useState([])

  useState(function () {

  }, [])

  useEffect(function () {
    fetch("http://localhost:3001/categorias")
      .then((res) => res.json())
      .then(function (category) {
        fetch("http://localhost:3001/catalogo")
          .then((res) => res.json())
          .then(function (catalog) {
            fetch("http://localhost:3001/quadideal")
              .then((res) => res.json())
              .then(function (quadIdealRaw) {
                const subjects = catalog
                  .filter(function (subject) {
                    return !(subject.SIGLA === "")
                  })
                  .map(function (subject) {
                    if (subject.SIGLA === "") {
                      subject.CATEGORIA = []
                      return subject
                    }
                    const categoryItem = category.find(function (item) {
                      return item.SIGLA === subject.SIGLA
                    })

                    subject.CATEGORIA = categoryItem.CATEGORIA.split(";")
                      .map(function (word) {
                        return word.split(" ")[0]
                      })
                    return subject
                  })

                const quadIdeal = []

                for (let i = 1; i <= 15; i++) {
                  const quad = quadIdealRaw[i]

                  quad.map(function (subject) {
                    if (subject.SIGLA === "") {
                      subject.RECOMENDACAO = ""
                      return subject
                    }

                    const item = subjects.find(function (subjectRaw) {
                      return subjectRaw.SIGLA == subject.SIGLA
                    }) || { RECOMENDACAO: "" }

                    subject.RECOMENDACAO = item.RECOMENDACAO
                    return subject
                  })

                  quadIdeal.push(
                    quad
                  )
                }

                setSubjects(subjects)
                setSubject(subjects[0])
                setQuadideal(quadIdeal)
              })
          })
      })
  }, [active])

  return (
    <div className={styles.home}>
      <Navigation active={active} setActive={setActive} search={search} setSearch={setSearch} />
      {
        active == "subject" ? (
          <>
            <SubjectList subjects={subjects} search={search} subject={subject} setSubject={setSubject} />
            <Subject subject={subject} />
          </>
        ) : ""
      }

      {
        active == "quadIdeal" ? (
          <QuadIdeal quadIdeal={quadIdeal}/>
        ) : ""
      }
    </div>
  );
}
