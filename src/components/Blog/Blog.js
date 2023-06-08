import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Blogcard from './Blogcard';

const Blog = () => {
  const [sortBy, setSortBy] = useState('date'); // Default sorting is by date
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Blog 1',
      date: '2021-01-01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra faucibus nisi, in tincidunt quam vehicula vel.'
    },
  ]); // State for blogs
  // Sort blogs based on the selected sort option
  const sortedBlogs = blogs.slice().sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date); // Sort by date (newest first)
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title); // Sort by title (ascending order)
    } else {
      return 0;
    }
  });

  return (
    <div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex items-center mb-4">
          <h1 className="text-4xl font-bold mr-4">Latest Blog Posts</h1>
          <div>
            <label htmlFor="sort-select" className="sr-only">
              Sort by:
            </label>
            <select
              id="sort-select"
              className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)} >
              <option value="date">Sort by Date (Newest First)</option>
              <option value="title">Sort by Title (A-Z)</option>
            </select>
          </div>
        </div>
        <div className='lg:grid grid-cols-3 '>
          <div className='m-5'>
            <h1>Ad By Admin </h1>
            <div className=" py-4">
              <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:pr-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Don't Miss Out on Our Deals!</h2>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nulla augue, et pretium ipsum semper eget.</p>
                </div>
                <div className="w-full lg:w-1/2">
                  <img src='https://placehold.co/600x400' alt="Ad Banner" className="w-full h-auto" />
                </div>
              </div>
            </div>
            <div> 
              For Connect to our Facebook , Click here  <a href="https://www.youtube.com/watch?v=0jyVq2TmEXk" className="text-blue-500 hover:text-blue-600">Facebook</a>!
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-2">
            {sortedBlogs.map((blog) => (
              <Blogcard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
        <Link to="/archive" className="text-blue-500 font-semibold mt-8">
          View All Posts
        </Link>
      </div>
    </div>
  );
};

export default Blog;