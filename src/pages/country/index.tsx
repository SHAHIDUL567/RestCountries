import { useEffect, useState } from "react";
import React from "react";
import { countryType } from "@/models/country";
import Link from "next/link";


const country = () => {
    const [countries, setCountries] = useState<countryType | null>(null);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(result => setCountries(result))
    }, [])

    console.log(country);

    return (
        <div className="container">
            <div className="row">
                {
                countries != null && countries.map((country, index) => 
                <div key={index} className="col-md-4 my-3"> 
                <div className="card">
                    <img src={country.flags.svg} className="card-img-top" style={{height:"255px"}} alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{country.name} </h4>
                        <Link href={`/country/country-details/${country.name}`} className="btn btn-primary">View Details</Link>
                         
                    </div>
                </div>
             </div>)}
         </div>
    </div>);
};
export default country;