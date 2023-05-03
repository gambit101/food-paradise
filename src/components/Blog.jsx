import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container mt-5'>
                <h2 className='text-warning text-center'>Tell us the differences between uncontrolled and controlled components.</h2>
                <p className='text-secondary text-center'>Uncontrolled components are traditional HTML form elements that maintain their own internal state.Uncontrolled components can be useful in cases where we need to read the values of the input fields only at the time of form submission.</p>
                <p className='text-secondary text-center'>Controlled components are React components where the value of the form element is controlled by the React state.Controlled components can be useful when we need to update the UI in real-time based on the user's input.Controlled components can be more complex to write, especially for large forms.</p>
            </div>
            <div className='container mt-5'>
                <h2 className='text-warning text-center'>How to validate React props using PropTypes</h2>
                <p className='text-secondary text-center'>React provides a utility library called PropTypes to help validate the props passed to a component. PropTypes allows us to define the type and shape of the expected props, helping to catch errors and potential bugs early in the development process. </p>
            </div>
            <div className='container mt-5'>
                <h2 className='text-warning text-center'>Tell us the difference between nodejs and express js.</h2>
                <p className='text-secondary text-center'>Node.js provides a runtime environment for executing JavaScript code on the server-side, while Express.js is a web framework built on top of Node.js that provides additional tools and features for building web applications and APIs. While Node.js can be used to build web applications, Express.js provides a more streamlined and convenient way to handle common web development tasks. </p>
            </div>
            <div className='container mt-5'>
                <h2 className='text-warning text-center'>What is a custom hook, and why will you create a custom hook?</h2>
                <p className='text-secondary text-center'>A custom hook is a reusable function that encapsulates some behavior or logic in a way that can be shared across multiple components in a React application.The main motivation behind creating a custom hook is to eliminate duplication and reduce the complexity of your code. When you have a piece of logic that is used in multiple components, it can become tedious and error-prone to copy and paste the code into each component. By creating a custom hook, you can encapsulate that logic in a single place and reuse it across multiple components, improving code readability and maintainability.</p>
            </div>
        </div>
    );
};

export default Blog;