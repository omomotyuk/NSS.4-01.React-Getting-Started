const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/employees`).then(result => result.json())
    },

    //
    delete(id) {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },

    getWithAnimals(id) {
        return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
            .then(result => result.json())
    }

}

//http://localhost:5002/employees/1?_embed=animals