import axios from 'axios'
const baseUrl = ' http://localhost:3001/api/persons'

const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}

const create = async newObject => {
    const request = axios.post(baseUrl, newObject)
    const response = await request
    return response.data
}

const update = async (id, name, newNumber) => {

    const response = await axios.put(`${baseUrl}/${id}`, {
        name: name,
        number: newNumber
    })
    return response.data
}


const delPerson = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    const response = await request
    return response.data
}

const personService = {
    getAll,
    create,
    delPerson,
    update
}

export default personService