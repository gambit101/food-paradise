import React from 'react';
import { useLoaderData, useParams} from 'react-router-dom';

const Foods = () => {

    // const {id} = useParams();

    const foods = useLoaderData();
    console.log(foods);

    // const {experience} = foods;
    
    // console.log(id);

    return (
        <div>
            <div className='d-flex container gap-3 mt-5'>
                <div>
                    <img style={{width: '500px'}} className='rounded' src={foods.chef_picture} alt="" />
                </div>
                <div>
                    <h2 className='text-warning fw-bold'>{foods.chef_name}</h2>
                    <h5 className='text-warning'>Experience: {foods.experience}</h5>
                    <h5 className='text-white'>3recipes</h5>
                    <h5 className='text-white'>Likes: {foods.likes}</h5>
                    <h5 className='text-white'>Details: {foods.description}</h5>
                </div>
            </div>

            {/* recipe */}

            <h1 className='text-center text-warning mt-5'>{foods.chef_name} recipes</h1>
            <hr className='text-white'/>

            <div className='d-flex container gap-3 mt-5'>
                <div>
                    <img className=' h-75 rounded' style={{width: '400px'}} src={foods.r1_img} alt="" />
                </div>

                <div>
                    <h2 className='text-warning'>
                        {foods.recipe1Name}
                    </h2>
                    <h4 className='text-white'>
                    <span className='text-warning'> Ingredients:</span> {foods.ingredients}
                    </h4>
                    <p className='text-white'>
                        Recipe: {foods.recipe1}
                    </p>
                    <button className='btn-warning'>Favorite</button>
                </div>

            </div>
            <div className='d-flex container gap-3'>
                <div>
                    <img className=' h-75 rounded' style={{width: '400px'}} src={foods.r1_img} alt="" />
                </div>

                <div>
                    <h2 className='text-warning'>
                        {foods.recipe2Name}
                    </h2>
                    <h4 className='text-white'>
                        <span className='text-warning'> Ingredients:</span> {foods.ingredients}
                    </h4>
                    <p className='text-white'>
                        Recipe: {foods.recipe2}
                    </p>
                    <button className='btn-warning'>Favorite</button>
                </div>

            </div>
            <div className='d-flex container gap-3'>
                <div>
                    <img className=' h-75 rounded' style={{width: '400px'}} src={foods.r1_img} alt="" />
                </div>

                <div>
                    <h2 className='text-warning'>
                        {foods.recipe3Name}
                    </h2>
                    <h4 className='text-white'>
                    <span className='text-warning'> Ingredients:</span> {foods.ingredients}
                    </h4>
                    <p className='text-white'>
                        Recipe: {foods.recipe3}
                    </p>
                    <button className='btn-warning'>Favorite</button>
                </div>

            </div>
            
        </div>
    );
};

export default Foods;