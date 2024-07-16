import React from 'react';
import logo from '../../assets/img/logo.png'
import OffCanvas from '../offcanvas';
import { NavLink } from 'react-router-dom';
import Toggle from '../toggle';
const Header = () => {
    return (
        <header className="header">
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='logo col-2'>
                        <img width={150} height={120} src={logo} alt="" />
                    </div>
                    <div className='navLinks col-8 align-content-center text-align-end'>
                        <NavLink to={'/'} className={'HeadLinks'}>Home</NavLink>
                        <NavLink to={'/about'} className={'HeadLinks'}>About</NavLink>
                        <NavLink to={'/services'} className={'HeadLinks'}>Services</NavLink>
                        <NavLink to={'/skills'} className={'HeadLinks'}>Skills</NavLink>
                        <NavLink to={'/contact'} className={'HeadLinks'}>Contact</NavLink>
                        <OffCanvas />
                        <Toggle/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
