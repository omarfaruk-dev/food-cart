import React from 'react';
import { useLoaderData } from 'react-router';
import MixFood from './MixFood';

const MixFoods = () => {
    const mixFoods = useLoaderData();
    return (
        <div className='my-20 container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                mixFoods.meals.map(mixFood => <MixFood key={mixFood.idMeal} mixFood={mixFood} ></MixFood>)
            }
        </div>
    );
};

export default MixFoods;