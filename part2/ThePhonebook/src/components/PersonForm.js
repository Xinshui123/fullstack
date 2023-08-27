const PersonForm = ({ addAll, newName, handleNameChange, newNumber, handleNumberChange }) => {

    return (
        <form onSubmit={addAll}>
            <div>
                name&nbsp;&nbsp;&nbsp;&nbsp;:
                <input
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                number:
                <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm