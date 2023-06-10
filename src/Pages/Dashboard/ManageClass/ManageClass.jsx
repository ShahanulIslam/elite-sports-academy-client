import React from 'react';
import useData from '../../../Hooks/UseData';

const ManageClass = () => {
    const [data, , refetch] = useData();
    console.log(data);
    // Todo Class Image, Class name, Instructor name, Instructor email, Available seats, Price,
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Class Image</th>
                        <th>Class name</th>
                        <th>Instructor name</th>
                        <th>Instructor email</th>
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
                            <td>{item.instructor_name}</td>
                            <td>{item.instructor_email}</td>
                            <td>{item.available_seats}</td>
                            <td className='text-end'>${item.price}</td>
                            <td className='text-end'>Pending</td>
                            <td>
                                <button className='btn btn-xs  w-full'>Approve</button>
                                <button className='btn btn-xs  my-2 w-full'>Deny</button>
                                <button className='btn btn-xs  w-full'>Feedback</button>
                            </td>
                        </tr>
                    )}
                </tbody>
                {/* foot */}
            </table>
        </div>
    );
};

export default ManageClass;