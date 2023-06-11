// import Slider from "../Slider/Slider";

import { Helmet } from "react-helmet";
import PopularClass from "../PopularClass/PopularClass";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Elite Sports Academy | Home</title>
            </Helmet>
            {/* <Slider></Slider> */}
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;