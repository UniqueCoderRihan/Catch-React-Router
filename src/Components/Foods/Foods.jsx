import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const foods = useLoaderData();
    return (
        <div>
            <input className='border-2 text-center w-96' type="text" />
            <button className='btn btn-success'>Search</button>
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