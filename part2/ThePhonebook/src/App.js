import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonShow from './components/PersonShow'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addAll = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
      import: false,
    }
    setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  }
  const nameExists = persons.find(person => person.name === newName)
  if (nameExists) {
    alert(`${newName} is already added to phonebook`)
  }

  const filtered = search
    ? persons.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    : persons

  //commite test

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        search={search}
        handleChange={handleChange}
      />
      <h2>add a new</h2>
      <PersonForm
        addAll={addAll}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PersonShow
        persons={filtered}
      />
    </div>
  )
}

export default App