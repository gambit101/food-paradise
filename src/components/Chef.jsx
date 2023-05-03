import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Chef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h1 className='text-warning text-center mt-5'>Our chefs</h1>
            <div className='mt-5 container text-center mx-auto row row-cols-lg-3'>
                {
                    chefs.map(chef => <p key={chef.id}>

                        <Card className='col col-lg-3 h-100' data-aos='flip-right' style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={chef.chef_picture} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>{chef.chef_name}</Card.Title>
                                <Card.Text>
                                    {chef.experience}
                                </Card.Text>
                                <p><span className='fw-bold'>Likes: </span>{chef.likes}</p>
                                <p><span className='fw-bold'>Recipes: </span>{chef.recipeName}</p>
                                <Link to={`/foods/${chef.id}`}>
                                    <Button variant="primary">View Recipes</Button>
                                </Link>
                            </Card.Body>
                        </Card>

                    </p>)
                }
            </div>
        </div>
    );
};

export default Chef;