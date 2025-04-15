import React from 'react';
import { useLoaderData } from 'react-router';
import FastFood from './FastFood';

const FastFoods = () => {

    const fastFoods = useLoaderData();

    return (
        <div className='mt-10 container mx-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                fastFoods.categories.map(fastFood => <FastFood key={fastFood.idCategory} fastFood ={fastFood} ></FastFood>)
            }
        </div>
    );
};

export default FastFoods