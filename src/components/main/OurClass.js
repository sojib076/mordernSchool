import React from 'react';
import './main.css'
const OurClass = () => {
    return (
        <div className='py-10  sm:py-16 lg:py-[70px] p-10'>
            <div className=''>
                <h1 className='main_header py-[10px]'>
                    This is our class
                </h1>
                <div className='flex flex-row justify-between  '>
                    <p className='main_p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae fuga, hic quidem ex ipsa eligendi explicabo fugit autem vel!</p>
                    <button className=' btn btn-primary'>
                        Enroll Now
                    </button>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 '>
                <div className="card card-compact w-80 bg-base-100 shadow-xl lg:m-4">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl m-4">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl m-4">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='py-[70px]'>
                <h1 className='main_header py-[10px]'>
                    Our Teacher
                </h1>
                <div className=' grid lg:grid-cols-4 p-5 lg:ml-5 gap-5'>
                    <div className="w-[90%] rounded overflow-hidden shadow-lg">
                        <img src="https://source.unsplash.com/random/800x600" alt="Teacher" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">John Doe</div>
                            <p className="text-gray-700 text-base">Mathematics</p>
                        </div>
                    </div>
                    <div className="w-[90%] rounded overflow-hidden shadow-lg">
                        <img src="https://source.unsplash.com/random/800x600" alt="Teacher" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">John Doe</div>
                            <p className="text-gray-700 text-base">Mathematics</p>
                        </div>
                    </div>
                    <div className="w-[90%] rounded overflow-hidden shadow-lg">
                        <img src="https://source.unsplash.com/random/800x600" alt="Teacher" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">John Doe</div>
                            <p className="text-gray-700 text-base">Mathematics</p>
                        </div>
                    </div>
                    <div className="w-[90%] rounded overflow-hidden shadow-lg">
                        <img src="https://source.unsplash.com/random/800x600" alt="Teacher" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">John Doe</div>
                            <p className="text-gray-700 text-base">Mathematics</p>
                        </div>
                    </div>


                </div>
            </div> */}

        </div>
    );
};

export default OurClass;