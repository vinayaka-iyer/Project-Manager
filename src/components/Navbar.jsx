import React from 'react'
import './Navbar.css'
import Workshop from '../assets/workshop.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='navbar'>
			<ul>
				<li className='logo'>
					<img src={Workshop} alt='workshop logo' />
					<span>The Workshop</span>
				</li>

				<li>
					<Link to='/login'>Login</Link>
				</li>
				<li>
					<Link to='/signup'>Signup</Link>
				</li>
				<li>
					<button className='btn'>Logout</button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar