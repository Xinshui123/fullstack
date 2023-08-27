const PersonShow = ({ persons }) => {
    return (
        <ul>
            {persons.map(person => <li key={person.name}>{person.name}&nbsp;&nbsp;{person.number}</li>)}
        </ul>
    )
}

export default PersonShow