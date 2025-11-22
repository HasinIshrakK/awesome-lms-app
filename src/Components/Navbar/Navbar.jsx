const l = <>
    <li><a>Submenu 2</a></li>
    <li><a>Submenu 2</a></li>
    <li><a>Submenu 2</a></li>
    <li><a>Submenu 2</a></li>
</>

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {l}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Awesome LMS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {l}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <a href="/auth/login" className="btn">Login</a>
                <a href="/auth/register" className="btn">Register</a>
            </div>
        </div>
    );
};

export default Navbar;