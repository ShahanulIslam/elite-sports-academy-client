import useData from "../../Hooks/UseData";

const AllClasses = () => {
    const [data] = useData();
    console.log(data);

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {data.map((classItem) => {
                return (
                    <div key={classItem._id} className="card card-compact relative bg-base-100 shadow-xl">
                        <figure>
                            <img className="h-72" src={classItem.class_image} alt="classes img" />
                        </figure>
                        <span className="px-4 py-2 text-white bg-black absolute top-4 right-3">Price :${classItem.price} </span>
                        <div className="card-body">
                            <h2 className="card-title">{classItem.class_name}</h2>
                            <p>Instructor : {classItem.instructor_name}</p>
                            <div className="flex justify-between">
                                <h4>Available Seats :{classItem.available_seats} </h4>
                            </div>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Select Button</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AllClasses;
