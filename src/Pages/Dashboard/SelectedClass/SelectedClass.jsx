import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import UseSelectedClass from '../../../Hooks/UseSelectedClass';
import { FaTrashAlt } from 'react-icons/fa';

const SelectedClass = () => {
    const [selectedClass] = UseSelectedClass();
    console.log(selectedClass);

    return (
        <div className='w-full'>
            <Helmet>
                <title>Elite Sports  Academy | Selected Class</title>
            </Helmet>
            <div className='uppercase flex font-semibold justify-evenly items-center h-[60px]'>
                <h3 >My Class</h3>
                <Link to="/dashboard/payment"><button className='btn btn-warning btn-sm'>Pay</button></Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#
                            </th>
                            <th>Class Img</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {selectedClass.map((item, index) =>
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
                                <td>${item.price}</td>
                                <td>
                                    <button  className="btn  text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;