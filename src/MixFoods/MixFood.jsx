import React from 'react';

const MixFood = ({ mixFood }) => {
    const { strMeal, strArea, strCategory, strMealThumb } = mixFood;
    return (
        <div className='border-2 border-amber-500 rounded-lg mb-5 md:mb-0'>
            <img className='w-full rounded-lg' src={strMealThumb} alt="" />
            <div className='p-3 flex flex-col'>
                <h2 className='text-lg mb-1'>Item Name: <strong>{strMeal}</strong></h2>
                <h3>Category: <strong>{strCategory}</strong></h3>
                <h3>Area: <strong>{strArea}</strong></h3>
                <button className='btn btn-warning w-full text-white text-lg my-5'>View Recipe</button>

            </div>
        </div>
    );
};

export default MixFood;