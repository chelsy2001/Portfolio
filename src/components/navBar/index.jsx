import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Resume',
        to: '/resume'
    },
    {
        label: 'Skills',
        to: '/skill'
    },
    {
        label: 'Project',
        to: '/project'
    },
    {
        label: 'Contact',
        to: '/contact'
    }
];

const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <nav className={`navbar ${toggleIcon ? "active" : ""}`}>
            <div className="navbar__container">
                <Link to={"/"} className="navbar__logo">
                    <FaReact size={30} />
                </Link>
                <ul className="navbar__menu">
                    {data.map((item, key) => (
                        <li key={key} className="navbar__menu__item">
                            <Link className="navbar__menu__item__links" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="navbar__icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
