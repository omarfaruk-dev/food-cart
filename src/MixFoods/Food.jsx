
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const Food = ({ food }) => {
    const { strMeal, strInstructions, strIngredient1, strIngredient2, strIngredient3, strMealThumb } = food;
    const navigate = useNavigate();

    return (
        <div className='w-[40%] mx-auto'>
            {/* <button onClick={()=>navigate(-1)}><ArrowLeft/>Back</button> */}
            <button className='btn btn-warning mb-10' onClick={()=> navigate(-1)}><ArrowLeft/> Back</button>

            <img className='w-[650px] h-[300px] object-cover border-5 border-amber-500 mx-auto rounded-xl mb-8' src={strMealThumb} alt="" />
            <div className='space-y-3'>
                <h2 className='text-3xl font-semibold '>{strMeal}</h2>
                <h3 className='text-xl'><strong>Ingredients : </strong> {strIngredient1}, {strIngredient2}, {strIngredient3} </h3>
                <p className='leading-8 text-lg'><strong>Recipe Process : </strong> {strInstructions}</p>
            </div>

        </div>
    );
};

export default Food;