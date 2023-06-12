import { Helmet } from "react-helmet";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import { useState } from "react";
import { FcFeedback } from "react-icons/fc";


const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = UseAuth();
    

    const [addedClass, setAddedClass] = useState([]);
    useEffect(() => {
        axiosSecure(`/myclass?email=${user?.email}`)
            .then(res => {
                const addedClassesData = res.data;
                setAddedClass(addedClassesData);
            })
            .catch(error => {
                console.error(error);
            });
    }, [axiosSecure, user]);

    return (
        <div>
            <Helmet>
                <title>Elite Sports  Academy | My Classes</title>
            </Helmet>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Details</th>
                            <th>Total Enrolled Student</th>
                            <th>Status</th>
                            <th>FeedBack</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedClass.map((cls,index) =>
                                <tr key={cls._id}>
                                    <th>
                                        {index+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cls.class_image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{cls.class_name}</div>
                                                <div className="text-sm">Instructor Name : {cls.instructor_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{cls.enrolled_class}</td>
                                    <td>{cls.class_status}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-sm"><FcFeedback></FcFeedback></button>
                                    </th>
                                    <th>
                                        <button className="btn btn-primary text-white btn-sm"> Update</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;