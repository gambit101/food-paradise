import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Toast } from 'react-bootstrap';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaStar, FaStarHalf, FaRegThumbsUp } from "react-icons/fa";

const Foods = () => {
    const [showToast, setShowToast] = useState(false);
    const [secondToast, setSecondToast] = useState(false);
    const [thirdToast, setThirdToast] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [disableButton2, setDisableButton2] = useState(false);
    const [disableButton3, setDisableButton3] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    // const {id} = useParams();

    const foods = useLoaderData();
    console.log(foods);

    // const {experience} = foods;

    // console.log(id);

    return (
        <div>
            <div className='d-flex container gap-3 mt-5' data-aos='fade-up' >
                <div>
                    <img style={{ width: '500px' }} className='rounded' src={foods.chef_picture} alt="" />
                </div>
                <div>
                    <h2 className='text-warning fw-bold'>{foods.chef_name}</h2>
                    <h5 className='text-warning mt-3'>Experience: {foods.experience}</h5>
                    <h5 className='text-white mt-3'>3 special recipes</h5>
                    <h5 className='text-white mt-3'><FaRegThumbsUp className='me-1'></FaRegThumbsUp> Likes: {foods.likes}</h5>
                    <h5 className='text-white mt-3'><span className='text-warning'>Details:</span> {foods.description}</h5>
                </div>
            </div>

            {/* recipe */}

            <h1 className='text-center text-warning mt-5'>{foods.chef_name} recipes</h1>
            <hr className='text-white' />

            <div className='d-flex container gap-3 mt-3 bg-secondary p-3 rounded' data-aos='fade-down'>
                <div>
                    <img className=' h-100 rounded' style={{ width: '400px' }} src={foods.r1_img} alt="" />
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
                    <Button className='bg-warning border-0 text-black fw-bold' onClick={() => {
                        setShowToast(true);
                        setDisableButton(true);
                    }} disabled={disableButton}>Favorite</Button>
                    <h5 className='text-warning mt-2'>Rating: <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></h5>
                    <div>
                        <Toast className='w-50 ms-auto' show={showToast} onClose={() => {
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
            <div className='d-flex container gap-3 mt-4 bg-secondary p-3 rounded' data-aos='fade-right'>
                <div>
                    <img className=' h-100 rounded' style={{ width: '400px' }} src={foods.r2_img} alt="" />
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
                    <Button className='bg-warning border-0 text-black fw-bold' onClick={() => {
                        setSecondToast(true);
                        setDisableButton2(true);
                    }} disabled={disableButton2}>Favorite</Button>
                    <h5 className='text-warning mt-2'>Rating: <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStarHalf></FaStarHalf></h5>
                    <div>
                        <Toast className='w-50 ms-auto' show={secondToast} onClose={() => {
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
            <div className='d-flex container gap-3 mt-4 h-25 bg-secondary p-3 rounded' data-aos='fade-left'>
                <div>
                    <img className=' h-100 rounded' style={{ width: '400px' }} src={foods.r3_img} alt="" />
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
                    <Button className='bg-warning border-0 text-black fw-bold' onClick={() => {
                        setThirdToast(true);
                        setDisableButton3(true);
                    }} disabled={disableButton3}>Favorite</Button>
                    <h5 className='text-warning mt-2'>Rating: <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStarHalf></FaStarHalf></h5>
                    <div>
                        <Toast className='w-50 ms-auto' show={thirdToast} onClose={() => {
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