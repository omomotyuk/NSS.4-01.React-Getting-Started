export function firstLetterCase(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}

export function splitTypeArray(arr) {
    return arr.join(" and ");
}

//
export function handleDelete(ElementManager, setState, elements, id) {
    return ElementManager.delete(id)
        .then(() => {
            ElementManager.getAll()
                .then((newElements) => {
                    setState({
                        elements: newElements,
                    })
                })
        })
}
