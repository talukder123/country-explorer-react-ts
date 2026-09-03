import type { CountryType } from "../../type"
import "./country.css"

export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {
    
    return (
        <div className="country">
            <h4>{country.name.common}</h4>
            
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <hr />
            <p>Population: {country.population.population}</p>
            <h4>Capital: {country.capital.capital}</h4>
            <h5>Region: {country.region.region}</h5>
            <br />
            <button>VISITED</button>


            <hr />
        </div>
    )
}