import React from 'react';
import error from '../assets/Error.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <img className='max-h-screen w-screen' src={error} alt="" />
            <Link to='/' className='btn btn-primary mt-4'>Go to home</Link>
        </div>
    );
};

export default Error;