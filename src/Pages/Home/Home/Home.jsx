// import Slider from "../Slider/Slider";

import { Helmet } from "react-helmet";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import Testimonial from "../Terminal/Testimonial ";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Elite Sports Academy | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;