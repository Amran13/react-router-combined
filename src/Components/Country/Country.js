import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const navigate = useNavigate();
    const showDetail = () => {
        const path = `/country/${props.name}`;
        navigate(path);
    }
    return (
        <div>
            <button onClick={showDetail}> {props.name} </button>
        </div>
    );
};

export default Country;