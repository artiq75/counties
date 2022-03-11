import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CountryItem } from '../components/CountryItem'
import { getCountries } from '../countriesApi'

export function Countries() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    let timeoutId = null
    if (!search) {
      getCountries().then(setCountries)
    } else {
      timeoutId = setTimeout(() => {
        getCountries(`name/${search}`).then(setCountries)
      }, 300)
    }
    return () => clearTimeout(timeoutId)
  }, [search])

  const handleSearch = function (e) {
    setSearch(e.target.value)
  }

  return (
    <div className="countries">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search for a country..."
      />
      {countries.map((country) => (
        <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
          <CountryItem country={country} />
        </Link>
      ))}
    </div>
  )
}
