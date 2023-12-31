import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUserShield } from "react-icons/fa";
import { Helmet } from "react-helmet";


const ManageUser = () => {

    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        console.log(res.data);
        return res.data;
    })

    const handleMakeInstructor = user => {
        fetch(`https://elite-sports-academy-server-xi.vercel.app/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Instructor now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeAdmin = user => {
        fetch(`https://elite-sports-academy-server-xi.vercel.app/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>Elite Sports Academy | Manage User</title>
            </Helmet>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Instructor</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {
                                        user.role === "admin" ? "Admin" :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#990001] hover:bg-blue-600  text-white">
                                                <FaUserShield></FaUserShield></button>
                                    }
                                </td>
                                <td>
                                    {
                                        user.role === "instructor" ? "Instructor" :
                                            <button onClick={() => handleMakeInstructor(user)} className="btn bg-[#990001] hover:bg-blue-600 text-white btn-xs">
                                                Make Instructor                                            </button>
                                    }
                                </td>
                            </tr>
                        )}

                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;