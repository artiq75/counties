import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CountryItem } from '../components/CountryItem'
import { getCountries } from '../countriesApi'

export function Countries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries().then(setCountries)
  }, [])

  return (
    <div className="countries">
      {countries.map((country) => (
        <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
          <CountryItem country={country} />
        </Link>
      ))}
    </div>
  )
}
