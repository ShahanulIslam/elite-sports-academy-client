import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ cls }) => {

    const { user } = UseAuth();
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const navigate = useNavigate();

    const handleSelectClass = cls => {
        const { class_name, class_image, instructor_name, price } = cls;
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
        else {
            Swal.fire({
                title: 'You are not login?',
                text: "Login before select class!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Do you want to login?'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }

    return (
        <div className="card card-compact relative bg-base-100 bg-transparent shadow-xl my-10">
            <figure>
                <img className="h-72" src={cls.class_image} alt="classes img" />
            </figure>
            <span className="px-4 py-2 text-white bg-black absolute top-4 right-3">Price: ${cls.price}</span>
            <div className="card-body">
                <h2 className="card-title">{cls.class_name}</h2>
                <p>Instructor: {cls.instructor_name}</p>
                <div className="flex justify-between">
                    <h4>Available Seats: {cls.available_seats}</h4>
                </div>
                <div className="card-actions justify-end">
                    <button disabled={isAdmin || isInstructor} onClick={() => handleSelectClass(cls)} className="btn bg-[#990001] hover:bg-blue-600 text-white rounded-ful">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;