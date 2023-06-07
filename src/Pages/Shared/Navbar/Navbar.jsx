import { Link } from "react-router-dom";


const Navbar = () => {
    const navbarItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Instructors</Link></li>
        <li><Link to="/">Classes</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
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
                    <h2 className="md:text-2xl hidden md:block font-bold">Elite Sports Academy</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbarItems}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-5">
                <div>
                    {/* USer Profile Pic */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;