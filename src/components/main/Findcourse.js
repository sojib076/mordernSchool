import React from 'react';
import './main.css'

const Findcourse = () => {
    return (
        <div className='py-10  sm:py-16 lg:py-[70px] md:p-10'>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div >
                    <div className=' lg:flex lg:flex-col gap-4'>
                        <h1 className='main_header'> Find Your Course</h1>
                        <p className='main_p'>ullam fringilla ipsum sed enim scelerisque, ac porttitor libero egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum dolor si</p>
                        <p className='main_p'>Call: +2 342 5446 67</p>
                    </div>
                    <div className='flex flex-row justify-between  '>
                        <img src="https://shelly.templatekit.co/wp-content/uploads/sites/35/elementor/thumbs/group-of-swimmers-at-sport-training-pfuoi1giqfl5vn8lkokvbmzpzg9ztwhzjpm1a99y0s.jpg.webp" alt="" srcset="" className='rounded-3xl m-2' />
                        <img src=" https://shelly.templatekit.co/wp-content/uploads/sites/35/elementor/thumbs/group-of-swimmers-at-sport-training-pfuoi1giqfl5vn8lkokvbmzpzg9ztwhzjpm1a99y0s.jpg.webp" alt="" srcset="" className='top-20 relative rounded-2xl lg:block hidden' />
                    </div>
                </div>
                <div className='p-5'>
                <h1 className='main_header mb-3'>  All events</h1>
                    <div className='flex flex-col j'> 
                    <div className="bg-white shadow-md rounded-md border-l-4 border-blue-500 p-4">
                        <div className="flex justify-between">
                            <p className="font-bold text-gray-800 mr-4">April 28, 2023</p>
                            <p className="text-gray-600">$9.99</p>
                        </div>
                        <h2 className="font-bold text-xl text-gray-900 my-4">Title of the Card Goes Here</h2>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Author Name</p>
                            <p className="text-gray-700">Author Location</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md border-l-4 border-blue-500 p-4 mt-5">
                        <div className="flex justify-between">
                            <p className="font-bold text-gray-800 mr-4">April 28, 2023</p>
                            <p className="text-gray-600">$9.99</p>
                        </div>
                        <h2 className="font-bold text-xl text-gray-900 my-4">Title of the Card Goes Here</h2>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Author Name</p>
                            <p className="text-gray-700">Author Location</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md border-l-4 border-blue-500 p-4 mt-5">
                        <div className="flex justify-between">
                            <p className="font-bold text-gray-800 mr-4">April 28, 2023</p>
                            <p className="text-gray-600">$9.99</p>
                        </div>
                        <h2 className="font-bold text-xl text-gray-900 my-4">Title of the Card Goes Here</h2>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Author Name</p>
                            <p className="text-gray-700">Author Location</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Findcourse;