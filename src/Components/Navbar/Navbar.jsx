'use client'
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
    const { data: session } = useSession();

    const l = <>
        <li><Link href='/courses'>All Courses</Link></li>
        {
            session && <>
                <li><Link href='/add-course'>Add Course</Link></li>
                <li><Link href='/my-courses'>My Courses</Link></li>
            </>
        }
        <li><Link href='/about'>About Us</Link></li>
        <li><Link href='/faqs'>FAQ</Link></li>
    </>

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
                <Link href='/' className="btn btn-ghost text-xl">Awesome LMS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {l}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {session ? (
                    <>
                        <span>Hi, {session.user.name}</span>
                        <button onClick={() => signOut({ callbackUrl: '/' })} className="btn ml-2">
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/auth/login" className="btn">Login</Link>
                        <Link href="/auth/register" className="btn">Register</Link>
                    </>
                )}

            </div>
        </div>
    );
};

export default Navbar;