import React from 'react';

const Country = (props) => {
    const btnStyle= {
        backgroundColor : 'skyblue',
        padding : '20px',
        borderRadius : '15px',
        fontSize : '20px',
        fontWeight : '600',
        color : '#FFFF',
        width : '150px',
        cursor : 'pointer'
    }
    return (
        <div>
            <button style={btnStyle}>{props.name}</button>
        </div>
    );
};

export default Country;