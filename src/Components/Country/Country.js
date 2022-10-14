import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div>
            <button> {props.name} </button>
        </div>
    );
};

export default Country;