import { mixResponses } from "@/utils/mixResponses";
import { useEffect, useState } from "react";

const { createContext, useContext } = require("react");

const context = createContext({});

export function SubjectsProvider({ children }) {
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState();
    const [quadIdeal, setQuadideal] = useState([]);

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
                                const { subjects, quadIdeal } = mixResponses(categories, catalog, quadIdealRaw);

                                setSubjects(subjects)
                                setSubject(subjects[0])
                                setQuadideal(quadIdeal)
                            })
                    })
            })
    }, [])

    return (
        <context.Provider
            value={{
                subjects,
                subject,
                setSubject,
                quadIdeal
            }}
        >
            {children}
        </context.Provider>
    );
}

export function useSubjects() {
    return useContext(context);
}
