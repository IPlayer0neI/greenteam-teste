export function filterSubjects(subjects, query) {
    return subjects.filter(function (subject) {
        return subject.CATEGORIA.find(function (category) {
            return category == query;
        })
    });
}