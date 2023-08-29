import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonShow from './components/PersonShow'
import personService from './services/Persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  // const [delId, setDel] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        console.log(initialPersons)
        setPersons(initialPersons)
      })
  }, [])

  // const handledel = (props) => {
  //   setDel(person.id)
  // }
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
    }

    const nameExists = persons.find(person => person.name === newName)
    if (nameExists) {
      if (window.confirm(`${newName} had already in the PhoneBook, replace the old number with the new one?`)) {
        personService
          .update(nameExists.id, newName, newNumber)
          .then(updatedPerson => {
            // 找到persons中要更新项的索引
            const index = persons.findIndex(p => p.id === updatedPerson.id);
            // 创建一个新的数组拷贝
            const newPersons = [...persons];
            // 在拷贝中更新指定索引项
            newPersons[index] = updatedPerson;
            // 设置状态为新数组以更新组件
            setPersons(newPersons);
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      personService
        .create(newObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      console.log(persons.find(p => p.id === id).name)
      personService
        .delPerson(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
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
        onDelete={deletePerson}
      />
    </div>
  )
}

export default App