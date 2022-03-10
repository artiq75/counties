import { useEffect, useState } from 'react'
import { CountryItem } from './components/CountryItem'
import { getCountries } from './utils'

export function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries()
      .then(countries => setCountries(countries))
  }, [])

  return (
    <div className="App">
      {countries.map((country) => (
        <CountryItem country={country} key={country.cca3} />
      ))}
    </div>
  )
}
