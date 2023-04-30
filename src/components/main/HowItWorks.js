import React, { useState } from 'react';

const HowItWorks = () => {
    const [works,setworks]= useState([
        {
            id: 1,
            title: 'Create a free account with univercity Code',
            p: ' For the first time you can create a free account with univercity code '
        },
        {
            id: 2,
            title: 'Check Your result Online ',
            p: ' You can check your result online with Roll Number and year of passing'
        },
        {
            id: 3,
            title: ' Download Your Markshee',
            p: ' You can download your marksheet online with Roll Number and year of passing And much more '
        },
    ])
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-[70px]">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className=" mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                      
                    {
                        works.map(work=> {

                            return (
                                <div key={work.id} className="flex flex-col items-center">
                                    <span className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-white bg-amber-400 shadow shadow-black  ">
                                        {work.id}
                                    </span>
                                    <h3 className="mt-4 text-xl font-bold text-gray-800">{work.title}</h3>
                                    <p className="mt-2 text-base text-gray-600">{work.p}</p>
                                </div>
                            )
                        } )
                    }
                     
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;