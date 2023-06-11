import React from 'react';
import useData from '../../../Hooks/UseData';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ManageClass = () => {
    const [data, , refetch] = useData();
    // console.log(data);

    // Handle status Approve 
    const handleApprove = (item) => {
        console.log(item);
        fetch(`http://localhost:5000/data/${item}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Class Approved !`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    // Handle status Deny 
    const handleDeny = (item) => {
        console.log(item);
        fetch(`http://localhost:5000/deny/${item}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Class Denied !`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };


    return (
        <div className="overflow-x-auto w-full">
            <Helmet>
                <title>Elite Sports Academy | ManageClass</title>
            </Helmet>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Class Image</th>
                        <th>Class name</th>
                        <th>Instructor Info</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>
                        <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.class_image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{item.class_name}</td>
                            <td>
                                <div>
                                    <h2 className='my-2'>{item.instructor_name}</h2>
                                    <h2>{item.instructor_email}</h2>
                                </div>
                            </td>
                            <td>{item.available_seats}</td>
                            <td className='text-end'>${item.price}</td>
                            <td className='text-end'>{item.class_status}</td>
                            <td>
                                {/* <button className='btn btn-xs  w-full'>Approve</button> */}
                                {item.class_status === "approved" ? (
                                    <button className=" w-full btn btn-xs btn-disabled font-bold ">
                                        Approved
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleApprove(item.class_status)}
                                        className="w-full btn btn-xs border-none font-bold"
                                    >
                                        Approve
                                    </button>
                                )}
                                {item.class_status === "denied" ? (
                                    <button className="my-4 w-full btn btn-xs btn-disabled font-bold ">
                                        Denied
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleDeny(item.class_status)}
                                        className="my-4 w-full btn btn-xs border-none font-bold"
                                    >
                                        Deny
                                    </button>
                                )}
                                {item.class_status === "denied" &&

                                    <Link
                                        state={item}
                                        to={'/dashboard/feedback'}
                                        className=" w-full btn btn-sm bg-orange-500 border-none text-white font-bold"
                                    >
                                        FeedBack
                                    </Link>
                                }
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageClass;