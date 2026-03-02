import React from 'react';
import './Country.css'
import { useState } from 'react';

const Country = ({country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);
    //console.log(country.name.common);
    //console.log(country.flags.flags.png);
    //console.log(country.area.area);
    //console.log(country.languages.languages)
    
    const handleVisited = () => {
        //console.log('button clicked')
        // basic system

        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // second system

        // setVisited(visited? false : true);

        // third system
        setVisited(!visited);
        handleVisitedCountries(country);

    }
    return (
       // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited' } ` }>
        <div className={`country ${visited && "country-visited"} ` }>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt}/>
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
                 country.area.area > 300000 ? "Big Country" : "Small country"    
            }</p>
            {/* <p>Languages: {country.languages.languages}</p> */}
            <button onClick ={handleVisited}>
                {visited ? "visited" : "Not Visited"}
            </button>
            <button onClick= {() => {handleVisitedFlag(country?.flags?.flags?.png)}}>Add visited Flag</button>
            
        </div>
    );
};

export default Country;