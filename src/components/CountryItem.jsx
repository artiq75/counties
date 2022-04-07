import { numberFormat } from "../utils";

export function CountryItem({ country }) {
  return (
    <article className="country-item" key={country.name}>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name}`}
      />
      <div className="country-item__details">
        <h2>{country.name}</h2>
        <ul>
          <li>Population: {numberFormat(country.population)}</li>
          <li>Region: {country.region}</li>
          <li>Capital: {country.capital}</li>
        </ul>
      </div>
    </article>
  )
}
