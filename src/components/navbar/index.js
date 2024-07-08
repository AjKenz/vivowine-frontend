import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaHeart, FaRegHeart, FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import '../../assets/styles/color.css'
import './navbar.css'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const handleToggleSideNave = () => setNavOpen(prev => !prev);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <img src={logo} alt='logo' />
                <ul>
                    <Link className='nav-item'>
                        <FaUser color='var(--icon-color)' size={24} />
                        {/* <li>Account</li> */}
                    </Link>

                    <Link className='nav-item'>
                        <CiSearch color='var(--icon-color)' size={27} />
                        {/* <li>Search</li> */}
                    </Link>

                    <Link className='nav-item'>
                        <FaHeart color='var(--icon-color)' size={24} />
                        {/* <li>liked</li> */}
                    </Link>

                    <Link className='nav-item'>
                        <MdShoppingCart color='var(--icon-color)' size={27} />
                        {/* <li>cart</li> */}
                    </Link>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;