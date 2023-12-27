import React, { useState } from 'react';
import CartWidget from "../CartWidget/CartWidget.jsx";
import classes from './Navbar.module.css'; // Import your CSS module
import {useNavigate } from 'react-router-dom'

const Navbar = ({cartCount}) => {
    const navigate = useNavigate()
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isNavCollapsed ? classes.fadeOut : classes.fadeIn}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <b>Computech</b>
                </a>
                <button
                    className={`navbar-toggler ${isNavCollapsed ? 'collapsed' : ''}`}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleNavCollapse}>
                                <p onClick={() => navigate('/')}>Home</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleNavCollapse}>
                                <p onClick={() => navigate('/category/celular')}>Cellphones</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleNavCollapse}>
                                <p onClick={() => navigate('/category/tablet')}>Tablet</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleNavCollapse}>
                                <p onClick={() => navigate('/category/laptop')}>Laptops</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget amount={cartCount} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
