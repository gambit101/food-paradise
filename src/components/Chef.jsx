import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';

const Chef = () => {
    const [chefs, setChefs] = useState([]);

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
                        
                            <Card className='col col-lg-3' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={chef.chef_picture} />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>{chef.chef_name}</Card.Title>
                                    <Card.Text>
                                        {chef.experience}
                                    </Card.Text>
                                    <p><span className='fw-bold'>Likes: </span>{chef.likes}</p>
                                    <p><span className='fw-bold'>Recipes: </span>{chef.recipes}</p>
                                    <Button variant="primary">View Recipes</Button>
                                </Card.Body>
                            </Card>
                        
                    </p>)
                }
            </div>
        </div>
    );
};

export default Chef;