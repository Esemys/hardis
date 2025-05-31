import React, {useState, useEffect} from 'react';
import { NavLink as Navlink } from 'react-router-dom';
import './style.css';
// import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import hardisLogo from '../../assets/hardis-logo.png'; // Adjust the path as necessary





function NavBar () {
	const [isOpen, setIsOpen] = useState(false);

  const handleFont = () => {
    setIsOpen(!isOpen);
  };

  //scroll event listener to close the menu when scrolling

useEffect(() => {
	const handleScroll = () => {
		if (isOpen) {
			setIsOpen(false);
		}
	};

	window.addEventListener('scroll', handleScroll);
	return () => {
		window.removeEventListener('scroll', handleScroll);
	};
}, [isOpen]);
  
    
	return (
		<div  >
			<div className="mobile-navbar" id="navbar">
				<div className="logo">
					<img src={hardisLogo} alt="logo" />
				</div>
				<div className="menu">
					<div onClick={handleFont} >
     				 	{isOpen ? <FaTimes /> : <FaBars />} 
						
    				</div>
		
				</div>
				<nav id="mobile-menu" style={{ display: isOpen ? 'flex' : 'none'}}>

					<Navlink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">home</Navlink> <hr />
					<Navlink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/products">products</Navlink> <hr />
					<Navlink className={({ isActive }) => (isActive ? 'active' : 'inactive')}  to="/blogs">blog</Navlink> <hr />
					<Navlink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/about">about us</Navlink> <hr />
					<Navlink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/contact">message us</Navlink> <hr />
						
					
				</nav>
				
			</div>
			<div className="main-navbar" id="navbar">
				<div className="logo">
					<img src={hardisLogo} alt="logo" />
				</div>
				<nav id="main-menu">
					<Navlink to="/">home</Navlink> 
					<Navlink to="/products">products</Navlink> 
					<Navlink to="/blogs">blog</Navlink> 
					<Navlink to="/about">about us</Navlink> 
					<Navlink to="/contact">message us</Navlink> 
				</nav>
				
			</div>
		</div>
	)
};


export default NavBar;