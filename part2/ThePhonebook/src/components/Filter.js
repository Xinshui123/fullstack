
const Filter = ({ search, handleChange }) => {

  return (
    <div>
      <div>
        filter shown with
        <input
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>

  )
}

export default Filter