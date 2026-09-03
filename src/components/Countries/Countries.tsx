import { use } from "react";
import type { CountryType } from "../../type";
import Country from "../Country/country";
import "./Countries.css"

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({countriesPromise}: CountriesProps) {

    const countries = use(countriesPromise);
    // console.log(countries);

    return (
        <div>
            <p>Hello, Lets explore earth with Talukder</p>
            <h2>Total Countries: {countries.length} </h2>

            <div className="countries">
                {
                    countries.map((country) => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>

        </div>
    )
}