import React from 'react';

const Newsletter = () => {
    return (
        <div className='py-10  sm:py-16 lg:py-[70px]'>
            <div className=" py-8 px-4 flex justify-center items-center">
                <div className=" mx-auto bg-white rounded-lg lg:shadow-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mr-8 md:mb-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h2>
                        <p className="text-gray-700">Stay up-to-date with the latest news and updates from our team.</p>
                    </div>
                    <div className="flex-grow md:pr-8">
                        <input type="text" placeholder="Name" className="rounded-full py-3 px-4 bg-gray-200 text-gray-700 w-full mb-4" />
                        <input type="email" placeholder="Email Address" className="rounded-full py-3 px-4 bg-gray-200 text-gray-700 w-full mb-4" />
                        <textarea placeholder="Your Message" className="rounded-lg py-3 px-4 bg-gray-200 text-gray-700 w-full h-32 resize-none" />
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full py-3 px-8">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Newsletter;