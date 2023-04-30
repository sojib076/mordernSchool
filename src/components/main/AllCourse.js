
import React from "react";
import './main.css'
const AllCourse = () => {
    return (
    <> 
        <div className="hero min-h-screen  bg-teal-400">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div> 
               <img src="https://shelly.templatekit.co/wp-content/uploads/sites/35/elementor/thumbs/school-children-using-phone-at-school-pfuoi4a10ujz8irbtuy05wmda0qi6suvrlvu50430k.jpg.webp" className="max-w-sm rounded-lg shadow-2xl" />
               <img src="https://shelly.templatekit.co/wp-content/uploads/sites/35/elementor/thumbs/school-children-using-phone-at-school-pfuoi4a10ujz8irbtuy05wmda0qi6suvrlvu50430k.jpg.webp" className="max-w-sm rounded-lg shadow-2xl mt-5" />
               </div>

                <div className="w-[70%]">
                    <h1 className="lg:text-[68px] text-[#2B2B2B] leading-[80px] w-[50%] font-[400] "> The Best Edu On Shcool On</h1>
                    <h1 className="text-[70px] text-[#F37335] my-[-2%] font-[600] underline "> City Near you  </h1>
                    <p className="py-6 w-[50%] main_p">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Check Result</button>
                </div>
            </div>
        </div>
        <div className="py-10  sm:py-16 lg:py-[70px]"> 
            <div> 
                <h1 className="text-center main_header py-[10px]"> Digital Everthing </h1>
                <p className=" text-sm text-center "> 
                    Pay your fees online, check your attendance, download study materials and much more.
                </p>
            </div>
            <div className=" grid lg:grid-cols-4  gap-4 w-[90%] mx-auto  p-5 mt-10"> 
                <div className="p-[20px] shadow-xl shadow-black rounded-xl mx-3"> 
                    <h1>  Awesome Teachers</h1>
                    <p>Vivamus intequis rdum, mauris quis cursus sodaquis les</p>
                </div>
          
            </div>
        </div>
    </>
    );
};

export default AllCourse;