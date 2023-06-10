import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageUser = () => {

    const [axiosSecure] =useAxiosSecure()
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        console.log(res.data);
        return res.data;
    })

    console.log(users);

    return (
        <div className="overflow-x-auto">
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
                                    <button className="btn btn-primary btn-xs">Make Admin</button>
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-xs">Make Instructor</button>
                                </td>
                            </tr>
                        )}

                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;