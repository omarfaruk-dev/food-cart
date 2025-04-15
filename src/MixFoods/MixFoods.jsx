import React from 'react';
import { useLoaderData } from 'react-router';
import MixFood from './MixFood';

const MixFoods = () => {
    const mixFoods = useLoaderData();
    console.log(mixFoods.meals);
    return (
        <div className='container mx-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                mixFoods.meals.map(mixFood => <MixFood key={mixFood.idMeal} mixFood={mixFood} ></MixFood>)
            }
        </div>
    );
};

export default MixFoods;