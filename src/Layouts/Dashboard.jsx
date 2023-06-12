import { Link, Outlet } from "react-router-dom";
import { FaHistory, FaHome, FaUsers } from 'react-icons/fa';
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
                            <li><Link to="/dashboard/manageclass" className="hover:text-[#990001]"><BiAddToQueue></BiAddToQueue> Manage Class</Link></li>
                            <li><Link to="/dashboard/manageuser" className="hover:text-[#990001]"><FaUsers></FaUsers> Manage User</Link></li>
                        </>
                            :
                            isInstructor ?
                                <>
                                    <li><Link to="/dashboard/addclass" className="hover:text-[#990001]" > Add Class</Link></li>
                                    <li><Link to="/dashboard/myclasses" className="hover:text-[#990001]"> MY Classes</Link></li>

                                </>
                                :
                                <>
                                    <li><Link to="/dashboard/selectedclass" className="hover:text-[#990001]"><AiFillFileAdd></AiFillFileAdd> My Select Class</Link></li>
                                    <li><Link to="/dashboard/myenrolledclass" className="hover:text-[#990001]"><GrCheckboxSelected></GrCheckboxSelected> My Enrolled Class</Link></li>
                                    <li><Link to="/dashboard/payment-history" className="hover:text-[#990001]"><FaHistory></FaHistory> Payment History</Link></li>
                                </>
                    }

                    <div className="divider">
                    </div>
                    <li><Link to="/" className="hover:text-[#990001]"><FaHome></FaHome> Home</Link></li>

                </ul>

            </div>
        </div >
    );
};

export default Dashboard;