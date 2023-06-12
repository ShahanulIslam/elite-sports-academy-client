
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
                    <img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg&ga=GA1.2.221673081.1680243366&semt=ais" className="h-[90vh]"  />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-sm font-medium">Legend 1</p>
                        <p className="text-sm">Text 1</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img src="https://img.freepik.com/free-photo/emotions-winner-african-american-young-basketball-player-red-team-action-neon-lights-dark-studio-background-concept-sport-movement-energy-dynamic-healthy-lifestyle_155003-34474.jpg"  className="h-[90vh]"  />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-sm font-medium">Legend 1</p>
                        <p className="text-sm">Text 1</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img src="https://img.freepik.com/free-vector/dynamic-gradient-football-background_23-2149007789.jpg?w=826&t=st=1686541373~exp=1686541973~hmac=083c07467f2c23a0bfda19931d5cbcf953a922ef61fb7ffa7abf78957d7a18fa" className="h-[90vh]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-sm font-medium">Legend 1</p>
                        <p className="text-sm">Text 1</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img src="https://img.freepik.com/premium-vector/vector-abstract-illustration-batsman-playing-cricket-from-colored-liquid-splashes-brush_316839-753.jpg?size=626&ext=jpg&ga=GA1.1.221673081.1680243366&semt=ais" className="h-[90vh]" />
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