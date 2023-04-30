import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-500 ease-in-out">
      <img className="w-full object-cover h-48 object-center" src="https://via.placeholder.com/400x200" alt="card" />
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-2xl mb-2">Card Headline</h1>
        <p className="text-gray-800 text-base">Some text about the card goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra faucibus nisi, in tincidunt quam vehicula vel. </p>
        <div className="mt-3">
          <a href="#" className="text-gray-500 uppercase hover:text-black font-bold">Read More</a>
        </div>
      </div>
    </div>
    
        </div>
    );
};

export default Blog;