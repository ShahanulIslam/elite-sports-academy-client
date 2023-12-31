import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import DarkMode from "../DarkMode/DarkMode";


const Navbar = () => {
    const { user, logOut } = UseAuth()
    const navbarItems = <>
        <li ><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/allclasses">Classes</Link></li>
        {
            user &&
            <li className="text-[#990001]"><Link to="/dashboard">Dashboard</Link></li>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.error(error))
    }


    return (
        <div className="navbar  h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarItems}
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <img src="" alt="" />
                    <h2 className="md:text-2xl hidden md:block font-bold text-[#990001]">Elite Sports Academy</h2>
                    <DarkMode></DarkMode>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbarItems}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-5">
                <div>
                    {user ?
                        <div className='flex gap-2 md:gap-4'>
                            <img title={user.displayName} className='rounded-full w-11 h-11' src={user.photoURL} alt="" />
                            <button onClick={handleLogOut} className='btn text-white hover:bg-blue-600 bg-[#990001]'>Logout</button>
                        </div> :
                        <Link to='/login' className="btn bg-[#990001] text-white hover:bg-blue-600">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;