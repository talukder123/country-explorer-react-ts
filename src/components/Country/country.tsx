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
        </div>
    )
}