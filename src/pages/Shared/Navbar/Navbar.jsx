import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../assets/logo1.jpg';
import './Navbar.css';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
            })
            .catch(error => console.log(error));
    }


    const Menu = <>
        <li><Link className='font-semibold' to="/">Home</Link></li>
        <li><Link className='font-semibold' to="/about">All Toys</Link></li>
        {user?.email ? <li><Link className='font-semibold' to="/about">My Toys</Link></li> : ''}
        {user?.email ?<li><Link className='font-semibold' to="/about">Add A Toy</Link></li>: ''}
        <li><Link className='font-semibold' to="/about">Blogs</Link></li>
        {user?.email ? <>
            <img className={user.photoURL ? 'img-menu' : ''} title={user?.displayName} src={user?.photoURL
            } alt="" />
            <li><button className='font-semibold btn btn-primary text-white mx-2' onClick={handleLogout}>Log out</button></li>
        </> :
            <Link className='font-semibold btn btn-primary text-white mx-2' to="/login">Login</Link>}
        <Link className='font-semibold btn btn-primary text-white' to="/register">Register</Link>
    </>

    return (
        <div className="navbar bg-base-200 h-28 pt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {Menu}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <Link to="/" className="nav-logo"> <img src={logo1} alt="" /> </Link>
                    <h4 className='font-bold text-2xl mb-2 ml-6'>Toy Emporium</h4>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;