import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import UseSelectedClass from '../../../Hooks/UseSelectedClass';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SelectedClass = () => {
    const [selectedClass, refetch] = UseSelectedClass();
    console.log(selectedClass);


    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selected-class/${item._id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

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
                                    <button onClick={() => handleDelete(item)} className="btn  text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button>
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