import React from 'react'
import './Navbar.css'
import Temple from '../assets/temple.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='navbar'>
			<ul>
				<li className='logo'>
					<img src={Temple} alt='workshop logo' />
					<span>The Workshop</span>
				</li>

				<li>
					<Link to='/login'>Login</Link>
				</li>
				<li>
					<Link to='/singup'>Signup</Link>
				</li>
				<li>
					<button className='btn'>Logout</button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar