import React from 'react';
import { NavLink } from 'react-router';

const MixFood = ({ mixFood }) => {
    const { strMeal, strArea, strCategory, strMealThumb, idMeal,strYoutube } = mixFood;

    return (
        <div className='border-2 border-amber-500 rounded-lg mb-5 md:mb-0 shadow-md'>
            <img className='w-full h-[200px] object-cover rounded-md' src={strMealThumb} alt="" />
            <div className='p-3'>
                <h2 className='text-lg mb-1'>Item Name: <strong>{strMeal}</strong></h2>
                <h3>Category: <strong>{strCategory}</strong></h3>
                <h3>Area: <strong>{strArea}</strong></h3>
                <div className='flex items-center justify-between mx-5'>
                    <NavLink to={`${idMeal}`}><button className='btn btn-warning text-white my-5'>View Recipe</button></NavLink>
                    
                    <button className='btn btn-warning text-white my-5'><a target='_blank' href={strYoutube}>Watch Video</a></button>
                </div>

            </div>
        </div>
    );
};

export default MixFood;