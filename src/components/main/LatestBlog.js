import React from 'react';

const LatestBlog = () => {
    return (
        <div>
            <section className="py-10  sm:py-16 lg:py-[70px]">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col items-center justify-between lg:flex-row lg:items-end">
                        <div className="flex flex-col items-center lg:items-start">
                            <h2 className="text-4xl font-bold leading-tight text-black lg:text-5xl">Latest from our blog</h2>
                            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Stay updated with the latest news, tips, and insights from our experts.</p>
                        </div>

                        <div className="flex items-center mt-4 space-x-3 lg:mt-0">
                            <button type="button" className="flex items-center justify-center w-9 h-9 rounded-full text-gray-600 transition-colors duration-200 bg-gray-100 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button type="button" className="flex items-center justify-center w-9 h-9 rounded-full text-gray-600 transition-colors duration-200 bg-gray-100 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        <div className="overflow-hidden rounded-lg shadow-lg">
                            <a href="#" className="block">
                                <img className="object-cover w-full lg:h-60 h-40" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="Coffee at home" />
                            </a>
                            <div className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">March 21, 2020</div>
                                <a href="#" className="block mt-2 text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                                    How to make coffee at home in 5 minutes
                                </a>
                                <p className="mt-3 text-gray-600 text-sm">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                </p>
                                <div className="flex items-center justify-end mt-4">
                                    <a href="#" className="text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200">Read more</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LatestBlog;