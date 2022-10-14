import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/mealdb">MealDB</Link>
                <Link to="/rest-countries">Rest Countries</Link>
            </nav>
        </div>
    );
};

export default Home;