import React, { useState } from 'react';

const FastFood = ({ fastFood }) => {

    const [showInfo, setShowInfo] = useState(false);


    const { strCategory, strCategoryThumb, strCategoryDescription } = fastFood;
    console.log(fastFood);
    return (
        <div className='border-2 border-amber-600 rounded-xl p-4 text-center'>
            <img className='w-full mb-5' src={strCategoryThumb} alt="" />
            <h2 className='text-xl'>Foods Name: <strong>{strCategory}</strong></h2>

            {
                showInfo ? <p>{strCategoryDescription}</p> : <p>{strCategoryDescription.slice(0, 70)}...</p>
            }
            <button className='btn bg-amber-600 mt-5' onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show More'}</button>
        </div>
    );
};

export default FastFood;