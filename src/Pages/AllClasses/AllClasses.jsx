
import { Helmet } from "react-helmet";
import useData from "../../Hooks/UseData";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllClasses = () => {
    const [data] = useData();
    const {user} = UseAuth();
    const [axiosSecure] = useAxiosSecure();

    const handleSelectClass = cls => {
        const {class_name, class_image, instructor_name, price} = cls;
        if (user?.email) {
            const newClass = { userEmail: user?.email, class_name, class_image, instructor_name, price }
            axiosSecure.post('/selected-class', newClass)
                .then(data => {
                    console.log(data.data.insertedId)
                    if (data.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Selected successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
                .catch(err => console.log(err))
        }
    }

    console.log(data);

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <Helmet>
                <title>Elite Sports Academy | All Classes</title>
            </Helmet>
            {data.map((classItem) => (
                <div key={classItem._id} className="card card-compact relative bg-base-100 shadow-xl">
                    <figure>
                        <img className="h-72" src={classItem.class_image} alt="classes img" />
                    </figure>
                    <span className="px-4 py-2 text-white bg-black absolute top-4 right-3">Price: ${classItem.price}</span>
                    <div className="card-body">
                        <h2 className="card-title">{classItem.class_name}</h2>
                        <p>Instructor: {classItem.instructor_name}</p>
                        <div className="flex justify-between">
                            <h4>Available Seats: {classItem.available_seats}</h4>
                        </div>
                        <div className="card-actions justify-center">
                            <button onClick={()=> handleSelectClass(classItem)} className="btn btn-primary">Select</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default AllClasses;
