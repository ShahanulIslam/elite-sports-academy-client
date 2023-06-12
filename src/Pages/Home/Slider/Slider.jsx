
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
                    <img src="https://img.freepik.com/premium-photo/sports-equipment-green-grass-top-view_51195-1154.jpg?size=626&ext=jpg&ga=GA1.1.221673081.1680243366&semt=ais" className="h-[90vh]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-5xl font-bold ">Unleashing the Champion Within: Exploring the Power of Sports.
                        </p>
                        <p className="font-semibold text-base my-2">Uncover the Thrills, Triumphs, and Transformations of Athletic Excellence</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img src="https://img.freepik.com/premium-photo/baseball-player-with-red-uniform-coming-out-blast-smoke_306105-144.jpg?size=626&ext=jpg&ga=GA1.1.221673081.1680243366&semt=ais" className="h-[90vh]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-5xl font-bold ">The Game Changers: Revolutionizing Sports for a New Era.
                        </p>
                        <p className="font-semibold text-base my-2">Discover the Cutting-Edge Strategies, Technologies, and Mindsets Redefining the Sporting Landscape</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img src="https://img.freepik.com/premium-photo/close-up-boxing-gloves-basketball-football-tennis-golf-balls-discus_107420-15699.jpg?size=626&ext=jpg&ga=GA1.1.221673081.1680243366&semt=ais" className="h-[90vh]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-5xl font-bold ">Beyond the Scoreboard: Unveiling the Deeper Impact of Sports.
                        </p>
                        <p className="font-semibold text-base my-2">Unleash the Life Lessons, Community Building, and Personal Growth Hiding Behind the Game.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img src="https://img.freepik.com/premium-photo/international-sports-day-6-april_10221-18936.jpg?size=626&ext=jpg&ga=GA1.1.221673081.1680243366&semt=ais" className="h-[90vh]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                        <p className=" text-5xl font-bold ">From Sweat to Glory: The Journey of Sports Legends
                        </p>
                        <p className="font-semibold text-base my-2">Embark on the Epic Quests, Inspiring Stories, and Legendary Legacies of Sporting Icons.</p>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;