import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { countryType } from "@/models/country";

const countryDetails = ()=>{
    const [country,setCountry] = useState<countryType | null>([]);
    const countryName = useParams()
    useEffect(()=>{
        fetch(`https://restcountries.com/v2/name/${countryName?.countryName}`)
        .then(res => res.json())
        .then(result => setCountry(result))
    },[])
    return(
        <div>
            <div>
                <h1>{country[0]?.name}</h1>
                <img src={country[0]?.flags.svg} style={{height:"255px"}} alt="..." />
                <h5 className="text-success">Capital : {country[0]?.capital} </h5>
                         <h5 className="text-success">Region : {country[0]?.region} </h5>
                         <h5 className="text-success">Sub-Region : {country[0]?.subregion} </h5>
                         <h5 className="text-success">Population : {country[0]?.population} </h5>
                         {/* <h5 className="text-success">Lattitude & Longitude : {country[0]?.latlng[0,1]} </h5> */}
                         <h5 className="text-success">DemoName : {country[0]?.demonym} </h5>
                         <h5 className="text-success">Area : {country[0]?.area} </h5>
                         <h5 className="text-success">TimeZone : {country[0]?.timezones} </h5>
                         {/* <h5 className="text-success">Borders : {country[0]?.borders} </h5> */}
                         {/* <h5 className="text-success">NativeName : {country[0]?.nativeName} </h5> */}
                         {/* <h5 className="text-success">NumericCode : {country[0]?.numericCode} </h5> */}
                         {/* <h5 className="text-success">Flags : {country[0]?.flags} </h5> */}
                         {/* <h5 className="text-success">Currency : {country[0]?.currencies} </h5> */}
                         {/* <h5 className="text-success">Languages : {country[0]?.languages} </h5> */}
            </div>
        </div>
    )
}
export default countryDetails;