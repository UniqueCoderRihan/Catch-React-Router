import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const foods = useLoaderData();
    return (
        <div>
            <h2 className='text-6xl font-extralight text-center'>This KeyWord Available Foods {foods.meals.length}</h2>
            <div className='grid md:grid-cols-3'>
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