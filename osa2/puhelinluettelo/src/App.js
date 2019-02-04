
import React, { useState, useEffect } from 'react'


import personService from './services/persons'





const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const PersonsForm = (props) => {

  const {successMessage, setSuccessMessage, newNumber, newName, persons, setPersons,setNewName, handleNameChange, handleNumberChange} = props




  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])



  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    
    if (persons.map(person => person.name).includes(personObject.name) === false) {
      personService
      .create(personObject)
      .then(returnedPersons => {
        setPersons(persons.concat(returnedPersons))
        setNewName('')
        setSuccessMessage(
          `muistiinpano lisätty onnistuneesti`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })

     
    }
    else {
      
      window.alert(`${personObject.name} on jo käytössä`);
    }
      
  }

  return (
    <form onSubmit={addPerson}>
    <div>
      nimi: <input value={newName}
      onChange={handleNameChange} />
    </div>
    <div>
      numero: <input value={newNumber}
      onChange={handleNumberChange} /></div>
    <div>
      <button type="submit">lisää</button>     
    </div>      
  </form>
  )

}


const ListPersons = (props) => {
  const { persons, setPersons, filter} = props

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter))

  const [newDelete, setNewDelete] = useState('')

  const handleDeleteChange = (event) => {
    console.log(event.target.value)
    setNewDelete(event.target.value)
    
  }
  

  const deletePerson = (event) => {
    

      personService
        .del(newDelete)
        .then(initialPersons => {
          setPersons(initialPersons)
        })
 
    
  
  }

  const rows = personsToShow.map(person => 
  <tr key = {person.name} id = {person.id}>
    <td>{person.name}</td> 
    <td>{person.number}</td>
    <td>{person.id}</td>
    <td>
    <form onSubmit={deletePerson}>
    <button type= "submit" value = {person.id} onClick = {handleDeleteChange}>poista</button>
    </form>
    
    </td>
  </tr>
 
  )
  
  


  
  return(

    
    <div>
        <table>
          <tbody>
           {rows}
          </tbody>
        </table>
    </div>
  )
}


const App = () => {

  
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState('')





  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    
  }




  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <div className = "success">
        <Notification message={successMessage} />
      </div>
    
      <form>
        <div>
          rajaa näytettäviä: <input value = {newFilter}
          onChange={handleFilterChange}
         />
        </div>
      </form>

      <h3>Lisää henkilö</h3>
      <PersonsForm persons={persons}
        newNumber={newNumber} 
        newName = {newName}
        setPersons={setPersons}
        setNewName={setNewName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}/>
      <h2>Numerot</h2>
      <div>
        <ListPersons persons={persons} filter={newFilter} setPersons={setPersons}
        />
      </div>
     
      
    </div>
  )

}

export default App