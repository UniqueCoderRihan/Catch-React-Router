import React from 'react';

const Food = ({food}) => {
    const {idMeal,strArea,strMealThumb,strMeal,strInstructions} = food;
    console.log(food);
    return (
            <div className='bord'>
                    <img src={strMealThumb} alt="" />
                    <h3 className='text-4xl'>{strMeal}</h3>
                </div>
    );
};

export default Food;