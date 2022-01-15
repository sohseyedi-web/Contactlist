import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navs">
            <div className='navbars container'>
                <Link to='/' className="navbars-logo">Soheils</Link>
                <Link to='/add' className="navbars-add">
                    <button className='navbars-add__btn'>
                        Add Contacts
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
