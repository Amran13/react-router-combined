import React from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = () => {
    const {countryName} = useParams()
    return (
        <div className='country-detail'>
            <h2>Country Detail : {countryName}</h2>
        </div>
    );
};

export default CountryDetail;