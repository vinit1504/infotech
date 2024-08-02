import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white font-serif">
      <div className="text-center">
        <div className="bg-cover bg-center h-80 bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')] flex items-center justify-center">
        </div>
        <div className="mt-[-50px] p-5 bg-white">
        <h1 className=" text-black text-2xl font-bold mb-10">404 Page Not Found</h1>
          <h3 className="text-5xl font-bold">Look like you're lost</h3>
          <p className="mt-4 text-lg text-gray-600">The page you are looking for is not available!</p>
          <Link to="/" className="mt-6 inline-block px-6 py-2 text-white bg-red-600 rounded hover:bg-red-700">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
