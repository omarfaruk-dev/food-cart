import React from 'react';
import { useLoaderData } from 'react-router';
import Food from './Food';

const MixFoodDetails = () => {
    const mixFoodDetails = useLoaderData();
    const foods = mixFoodDetails.meals;
    console.log(foods);
    return (
        <div className='my-20'>
            {
                foods.map(food => <Food key={food.idMeal} food ={food}></Food> )
            }
        </div>
    );
};

export default MixFoodDetails;