import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Chef from './Chef';
import Story from './Story';
import Event from './Event';

const Home = () => {
    return (
        <div>
            <Card className="text-white">
                <Card.Img className='' style={{ height: '700px' }} src="https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='ms-auto w-50 text-warning fs-2 mt-5'>Welcome to Food Paradise</Card.Title>
                    <Card.Text className='ms-auto w-50 text-warning fs-3  mt-5'>
                        Where every flavor tells a story.
                    </Card.Text>
                    <Card.Text className='ms-auto text-white fs-3 w-50 mt-5'>“If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.Ask not what you can do for your country. Ask what’s for lunch.”</Card.Text>
                    <div className='w-50 ms-auto'>
                        <Link to='/register'>
                            <button type="button" class="ms-auto btn btn-warning fw-bold">Register Now</button>
                        </Link>
                    </div>
                </Card.ImgOverlay>
            </Card>

            <Chef>

            </Chef>

            <Story></Story>

            <Event></Event>
        </div>
    );
};

export default Home;