import { numberFormat } from "../utils";

export function CountryItem({ country }) {
  return (
    <article key={country.name}>
      <img
        src={country.flags.svg}
        alt={`Drapeau du ${country.name.official}`}
      />
      <h2>{country.name.official}</h2>
      <ul>
        <li>Population: {numberFormat(country.population)}</li>
        <li>Region: {country.region}</li>
        <li>Capital: {country.capital}</li>
      </ul>
    </article>
  )
}
