const PersonShow = ({ persons, onDelete }) => {

    return (
        <ul>
            {persons.map(person =>
                <li key={person.name}>
                    {person.name}
                    &nbsp;&nbsp;
                    {person.number}
                    <button onClick={() => onDelete(person.id)}>
                        delete {person.id}
                    </button>
                </li>)}
        </ul>
    )
}

export default PersonShow