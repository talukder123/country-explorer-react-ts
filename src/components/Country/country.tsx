import { useState } from "react"
import type { CountryType } from "../../type"
import "./country.css"

export interface CountryProps {
    country: CountryType
    handleVisitedCountry : (country:CountryType) => void
    handleVisitedFlag: (flag:string) => void
}

export default function Country({ country, handleVisitedCountry, handleVisitedFlag }: CountryProps) {

    const [visited, setVisited] = useState<boolean>(false)

    const handleVisited = () => {
        // if (visited) {
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }
        setVisited(!visited)
        handleVisitedCountry(country)
    }
    
    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <h4>{country.name.common}</h4>
            
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <hr />
            <p>Population: {country.population.population}</p>
            <h4>Capital: {country.capital.capital}</h4>
            <h5>Region: {country.region.region}</h5>
            <br />
            <button className="visit-btn" onClick={handleVisited}>{visited ? "Visited" : "mark as visited"}</button>
            <button className="visit-flag" onClick={() => handleVisitedFlag(country.flags.flags.png)}>Add visited flag</button>

            <hr />
        </div>
    )
}