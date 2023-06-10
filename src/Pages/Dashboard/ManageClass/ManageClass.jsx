import React from 'react';

const ManageClass = () => {
    // Todo 
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
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