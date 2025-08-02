export function mixResponses(categories, catalog, quadIdealRaw) {
    function filterEmptySIGLA(subject) {
        return !(subject.SIGLA === "")
    }

    function takeSIGLA(subject) {
        if (subject.SIGLA === "") {
            subject.CATEGORIA = []
            return subject
        }

        const category = categories.find(function (category) {
            return category.SIGLA === subject.SIGLA
        })

        subject.CATEGORIA = category.CATEGORIA.split(";")
            .map(function (word) {
                return word.split(" ")[0]
            })

        return subject
    }

    const subjects = catalog
        .filter(filterEmptySIGLA)
        .map(takeSIGLA)

    function takeRECOMENDACAO(subject) {
        if (subject.SIGLA === "") {
            subject.RECOMENDACAO = ""
            return subject
        }

        const item = subjects.find(function (subjectRaw) {
            return subjectRaw.SIGLA == subject.SIGLA
        }) || { RECOMENDACAO: "" }

        subject.RECOMENDACAO = item.RECOMENDACAO
        return subject
    }

    const quadIdeal = []

    for (let i = 1; i <= 15; i++) {
        let quad = quadIdealRaw[i]

        quad = quad.map(takeRECOMENDACAO)

        quadIdeal.push(quad)
    }

    return {
        subjects: subjects,
        quadIdeal: quadIdeal
    }
}