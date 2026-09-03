import { use } from "react";

import type { CountryType } from "../type";

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({countriesPromise}: CountriesProps) {

    const countries = use(countriesPromise);
    console.log(countries);

    return (
        <div>
            <h2>Countries: </h2>
            <ul>
                {
                    countries.map((country) => <li>{country.name.common}</li>)
                }
            </ul>
        </div>
    )
}