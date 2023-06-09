
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import img2 from "../../../assets/"
// import img3 from "../../../assets/"
// import img4 from "../../../assets/"

const Slider = () => {
    return (
        
        <Carousel>
            <div>
                <div className="relative">
                    <img className="h-[90vh]"  />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-sm font-medium">Legend 1</p>
                        <p className="text-sm">Text 1</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img  className="h-[90vh]"  />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-sm font-medium">Legend 1</p>
                        <p className="text-sm">Text 1</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img  className="h-[90vh]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-sm font-medium">Legend 1</p>
                        <p className="text-sm">Text 1</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img  className="h-[90vh]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-sm font-medium">Legend 1</p>
                        <p className="text-sm">Text 1</p>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;