import React from 'react';

const ManageClass = () => {
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
                        <th>Available seats</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                            <td>1</td>
                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src='' alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>
                        <td>
                            home
                        </td>
                        <td>Purple</td>

                    </tr>

                </tbody>
                {/* foot */}
            </table>
        </div>
    );
};

export default ManageClass;