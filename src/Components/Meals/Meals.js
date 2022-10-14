import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])
    return (
        <div className='meals-container'>
            <h2>Total Meals : {meals.length}</h2>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal> )
                }
            </div>
        </div>
    );
};

export default Meals;