import { NavLink, Outlet } from "react-router-dom";
import { FaHome,FaUsers } from 'react-icons/fa';


const Dashboard = () => {
    const isAdmin = true;
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
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manageuser"><FaUsers></FaUsers> Manage User</NavLink></li>
                            <li><NavLink to="/dashboard/manageclass"><FaUsers></FaUsers> Manage Class</NavLink></li>

                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userhome"> Selected Class</NavLink></li>
                                
                            </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;