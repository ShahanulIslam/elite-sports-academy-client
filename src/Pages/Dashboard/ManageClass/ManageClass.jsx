import React from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AllData from '../../../Hooks/AllData';

const ManageClass = () => {
    const [allData, ,refetch] = AllData()
    // console.log(data);


    const handleUpdateStatus = (id, status) => {
        fetch(`https://elite-sports-academy-server-xi.vercel.app/classes/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ class_status: status }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Class has been ${status}`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleApprove = (id) => {
        handleUpdateStatus(id, "approved");
    };

    const handleDeny = (id) => {
        handleUpdateStatus(id, "denied");
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
                    {allData.map((item, index) =>
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
                            <th>
                                <button disabled={item.class_status !== 'pending'} onClick={() => handleApprove(item._id)} className="btn w-full bg-[#990001] hover:bg-blue-600 text-white  btn-xs">Approve</button>
                                <br />
                                <button disabled={item.class_status !== 'pending'} onClick={() => handleDeny(item._id)} className="btn bg-[#990001] hover:bg-blue-600 text-white  my-4 w-full  btn-xs">Deny</button>
                                <br />
                                <Link to={`/dashboard/feedback`} state={item}><button className="btn  w-full bg-[#990001] hover:bg-blue-600 text-white  btn-xs">Feedback</button></Link>
                            </th>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageClass;