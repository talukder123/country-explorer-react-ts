import { use, useState } from "react";
import type { CountryType } from "../../type";
import Country from "../Country/country";
import "./Countries.css"

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {

    const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([])

    const [visitedFlags, setVisitedFlags] = useState<string[]>([])

    const countries = use(countriesPromise);
    // console.log(countries);

    const handleVisitedCountries = (country: CountryType): void => {
        const newVisited = [...visitedCountries, country]
        setVisitedCountries(newVisited)
    }

    const handleVisitedFlag = (flag: string): void => {
        console.log('flag visited', flag);

        if (visitedFlags.includes(flag)) {
            const remainingFlags = visitedFlags.filter(f => f!== flag);
            setVisitedFlags(remainingFlags);
        } else {
            const newVisitedFlag = [...visitedFlags, flag];
            setVisitedFlags(newVisitedFlag);
        }

    }

    return (
        <div>
            <p>Hello, Lets explore earth with Talukder</p>
            <h2>Total Countries: {countries.length} </h2>
            <h2>Visited Countries: {visitedCountries.length}</h2>
            <h3>Visited Flags: {visitedFlags.length}</h3>

            <div className="countries">
                {
                    countries.map((country) => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    />)
                }
            </div>

        </div>
    )
}