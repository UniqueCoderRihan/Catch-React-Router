import React from 'react';

const Food = ({food}) => {
    const {idMeal,strArea,strMealThumb,strMeal,strInstructions} = food;
    console.log(food);
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
        <figure><img src={strMealThumb} alt="FoodPic" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {strMeal}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Fresh Food Forever Give From Us...</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Foods</div>
            <div className="badge badge-outline">Fresh</div>
          </div>
        </div>
      </div>
    );
};

export default Food;