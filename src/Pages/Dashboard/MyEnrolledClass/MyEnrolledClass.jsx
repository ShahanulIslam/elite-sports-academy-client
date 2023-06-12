import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MyEnrolledClass = () => {
    // const data = useLoaderData();
    const [axiosSecure] = useAxiosSecure()

    const [enrolledClass, setEnrolledClass] = useState([]);
    useEffect(() => {
        axiosSecure("http://localhost:5000/enrolled-class")
            .then(res => {
                const enrolledClassesData = res.data;
                setEnrolledClass(enrolledClassesData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    console.log(enrolledClass);

    return (
        <div>
            <Helmet>
                <title>Elite Sports  Academy | MyEnrolled Class</title>
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
                            <th>TransactionId</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClass.map((cls, index) =>
                                <tr key={cls._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{cls.className}</div>
                                                <div className="text-sm"> {cls.InstructorName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {cls.transectionId}
                                    </td>
                                    <td>
                                        {cls.price}
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyEnrolledClass;