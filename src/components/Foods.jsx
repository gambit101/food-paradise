import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Toast } from 'react-bootstrap';

const Foods = () => {
    const [showToast, setShowToast] = useState(false);
    const [secondToast, setSecondToast] = useState(false);
    const [thirdToast, setThirdToast] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [disableButton2, setDisableButton2] = useState(false);
    const [disableButton3, setDisableButton3] = useState(false);

    // const {id} = useParams();

    const foods = useLoaderData();
    console.log(foods);

    // const {experience} = foods;

    // console.log(id);

    return (
        <div>
            <div className='d-flex container gap-3 mt-5'>
                <div>
                    <img style={{ width: '500px' }} className='rounded' src={foods.chef_picture} alt="" />
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
            <hr className='text-white' />

            <div className='d-flex container gap-3 mt-5 h-25'>
                <div style={{ height: '400px' }}>
                    <img className=' h-75 rounded' style={{ width: '400px' }} src={foods.r1_img} alt="" />
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
                    <Button onClick={() => {
                        setShowToast(true);
                        setDisableButton(true);
                    }} disabled={disableButton}>Favorite</Button>
                    <div>
                        <Toast className='w-50 ms-auto'  show={showToast} onClose={() => {
                            setShowToast(false);
                            
                        }}>
                            <Toast.Header>
                                <strong className="ms-auto">{foods.recipe1Name}</strong>
                            </Toast.Header>
                            <Toast.Body className='text-primary fw-bold'>Added to favorite</Toast.Body>
                        </Toast>
                    </div>
                </div>

            </div>
            <div className='d-flex container gap-3 mt-4 '>
                <div>
                    <img className=' h-75 rounded' style={{ width: '400px' }} src={foods.r2_img} alt="" />
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
                    <Button onClick={() => {
                        setSecondToast(true);
                        setDisableButton2(true);
                    }} disabled={disableButton2}>Favorite</Button>
                    <div>
                        <Toast className='w-50 ms-auto'  show={secondToast} onClose={() => {
                            setSecondToast(false);
                            
                        }}>
                            <Toast.Header>
                                <strong className="ms-auto">{foods.recipe2Name}</strong>
                            </Toast.Header>
                            <Toast.Body className='text-primary fw-bold'>Added to favorite</Toast.Body>
                        </Toast>
                    </div>
                </div>

            </div>
            <div className='d-flex container gap-3 mt-4 h-25'>
                <div>
                    <img className=' h-75 rounded' style={{ width: '400px' }} src={foods.r3_img} alt="" />
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
                    <Button onClick={() => {
                        setThirdToast(true);
                        setDisableButton3(true);
                    }} disabled={disableButton3}>Favorite</Button>
                    <div>
                        <Toast className='w-50 ms-auto'  show={thirdToast} onClose={() => {
                            setThirdToast(false);
                            
                        }}>
                            <Toast.Header>
                                <strong className="ms-auto">{foods.recipe3Name}</strong>
                            </Toast.Header>
                            <Toast.Body className='text-primary fw-bold'>Added to favorite</Toast.Body>
                        </Toast>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Foods;