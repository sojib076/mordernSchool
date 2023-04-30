import Footer from "../Footer/Footer";
import AllCourse from "./AllCourse";
import Findcourse from "./Findcourse";
import Newsletter from "./Newsletter";
import OurClass from "./OurClass";
import React from "react";
import './main.css'
import HowItWorks from "./HowItWorks";
import LatestBlog from "./LatestBlog";

const MainHome = () => {
    return (
        <div className='bg-white'>
             <AllCourse></AllCourse>
             <HowItWorks></HowItWorks>
             <OurClass></OurClass>
             <Findcourse> </Findcourse>
             <LatestBlog></LatestBlog>
             <Newsletter></Newsletter>
             
        </div>
    );
};

export default MainHome;