import React, { useEffect, useState } from 'react';
import './RestCountries.css';
import Country from '../Country/Country';
import { Spinner } from 'react-bootstrap';

const RestCountries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            {
                countries.length === 0 ? 
                <div className='spinner'>
                    <Spinner animation="border" variant="dark" />
                </div>
                :
                <div className='countries-container'>
                <h2>Total Countries : {countries.length} </h2>
                <div className='country-container'>
                    {
                        countries.map(country => <Country key={country.name.official} name={country.name.common}> </Country>)
                    }
                </div>
            </div>

            }
            
        </div>
    );
};

export default RestCountries;