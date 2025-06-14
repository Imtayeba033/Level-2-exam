import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' flex justify-center items-center h-[100vh]'>
            <div class="text-center ">
    <h1 className="text-7xl font-bold  text-shadow-emerald-400">404</h1>
    <p className="text-2xl mt-4">Page not found</p>
    <p className="text-base mt-2 text-gray-500">Sorry, the page you're looking for doesn’t exist or has been moved.</p>
    <a href="/" class="btn btn-accent mt-6 text-white">Back to Home</a>
  </div>
        </div>
    );
};

export default Error;