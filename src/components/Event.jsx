import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Event = () => {
    return (
        <div className='container mt-5'>
            <div>
                <h2 className='text-center text-warning'>Upcoming Events</h2>
            </div>
            <div className='mt-4'>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/08/10/05/44/pizza-2618726_960_720.jpg" />
                        <Card.Body>
                            <Card.Title className='fw-bold'>Italian Pasta Workshop for All Family</Card.Title>
                            <Card.Text>

                                The classic “like, follow, and tag” Instagram contest works well for gift card promotions. Here’s how it’s done: You post a photo of a gift card, and anyone who follows your account, likes your post and tags someone in the comments can be entered into a raffle for a free gift card. These contests are so popular because they are easy  and can help you share your brand with a ton of new users.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card className='ms-2'>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg" />
                        <Card.Body>
                            <Card.Title className='fw-bold'>Pizza House Hollyday Sale</Card.Title>
                            <Card.Text>

                                Have you ever tried creating a garlic-bread wreath or pizza wreath? They make for delicious appetizers and mouthwatering content on social media. You can find plenty of recipes online, but a pizza wreath is just a pizza without the middle, and a garlic-bread wreath is essentially biscuits arranged in a circle and covered with garlic butter, with dipping sauce in the middle. They are easy to make, profitable and perfectly seasonal.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card className='ms-2'>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg" />
                        <Card.Body>
                            <Card.Title className='fw-bold'>Workshop at Pizza House</Card.Title>
                            <Card.Text>
                                Take a break from sightseeing and delve into Italy's beloved cuisine with this pasta and tiramisù cooking class in the heart of Rome. Roll up your sleeves and learn how to roll and fill fresh pasta like a pro plus pick up techniques for assembling a flawless tiramisù in a restaurant kitchen right on Piazza Navona. End by feasting on the dishes you've prepared, served with wine, limoncello, and coffee.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Event;