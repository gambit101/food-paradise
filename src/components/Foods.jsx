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
            <h2 className='text-warning'>chef details coming...{foods.experience}</h2>
            
        </div>
    );
};

export default Foods;