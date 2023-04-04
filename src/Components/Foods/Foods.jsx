import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const foods = useLoaderData();
    return (
        <div>
            <h2>This KeyWord Available Foods {foods.meals.length}</h2>
            <div>
                {
                    foods.meals.map(food=> <Food
                    key={food.idMeal}
                    food={food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;