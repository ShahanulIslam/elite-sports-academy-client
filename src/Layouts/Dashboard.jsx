import { Link, Outlet } from "react-router-dom";
import { FaHome, FaUsers } from 'react-icons/fa';
import { BiAddToQueue, } from 'react-icons/bi';
import { AiFillFileAdd } from 'react-icons/ai';
import { GrCheckboxSelected } from 'react-icons/gr';
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { Helmet } from "react-helmet";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    
    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Elite Sports Academy | All Classes</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {
                        isAdmin ? <>
                            <li><Link to="/dashboard/manageclass"><BiAddToQueue></BiAddToQueue> Manage Class</Link></li>
                            <li><Link to="/dashboard/manageuser"><FaUsers></FaUsers> Manage User</Link></li>
                            <li><Link to="/"><FaHome></FaHome>  Home</Link></li>
                        </>
                            :
                            isInstructor ?
                                <>
                                    <li><Link to="/"><FaHome></FaHome> Home</Link></li>
                                    <li><Link to="/dashboard/addclass"> Add Class</Link></li>
                                    <li><Link to="/dashboard/myclasses"> MY Classes</Link></li>

                                </>
                                :
                                <>
                                    <li><Link to="/"><FaHome></FaHome> Home</Link></li>
                                    <li><Link to="/dashboard/selectedclass"><AiFillFileAdd></AiFillFileAdd> My Select Class</Link></li>
                                    <li><Link to="/dashboard/myenrolledclass"><GrCheckboxSelected></GrCheckboxSelected> My Enrolled Class</Link></li>
                                </>
                    }

                </ul>

            </div>
        </div >
    );
};

export default Dashboard;