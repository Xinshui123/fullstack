import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryShow from './components/CountryShow'
import CountryInfo from './components/CountryInfo'

const App = () => {
  const [country, findCountry] = useState([])
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        findCountry(response.data)
      })
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
    if (filtered.length > 10) {
      setShow(true)
    } else {
      setShow(false)
    }
  }


  const filtered = search
    ? country.filter(p => p.name.common.toLowerCase().includes(search.toLowerCase()))
    : country

  return (
    <div>
      <Filter
        search={search}
        handleChange={handleChange} />
      {
        show
          ? 'Too much Couuntries'
          : filtered.length === 1
            ? <CountryInfo country={filtered} />
            : <CountryShow country={filtered} />
      }
    </div>
  )
}

export default App;
