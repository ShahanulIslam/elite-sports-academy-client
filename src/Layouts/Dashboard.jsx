import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers } from 'react-icons/fa';
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    // const role = "admin"
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manageclass"><FaUsers></FaUsers> Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/manageuser"><FaUsers></FaUsers> Manage User</NavLink></li>
                            <li><NavLink to="/"><FaHome></FaHome>  Home</NavLink></li>
                        </> :
                            // (role === "instructor") ?
                                <>
                                    <li><NavLink to="/"> Home</NavLink></li>
                                    <li><NavLink to="/dashboard/addclass"> Add Class</NavLink></li>
                                    <li><NavLink to="/dashboard/myclasses"> MY Class</NavLink></li>

                                </>
                                //  :
                                // <>
                                //     <li><NavLink>My Enrolled Class</NavLink></li>
                                //     <li><NavLink>My Select Class</NavLink></li>
                                //     <li><NavLink to="/"> Home</NavLink></li>
                                // </>

                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;