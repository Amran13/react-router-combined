import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {strMeal, strMealThumb} = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="meal" />
            <h3>{strMeal}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet facere autem quibusdam officia illum deserunt, atque, voluptate perferendis mollitia sed corporis maxime dolorem tenetur in ad. Sequi, eaque harum?</p>
        </div>
    );
};

export default Meal;