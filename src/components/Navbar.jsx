import React from 'react'
import './Navbar.css'
import Workshop from '../assets/workshop.svg'
import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'

const Navbar = () => {
	const {logout, isPending} = useLogout() 
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
				{isPending && (
					<li>
						<button disabled className='btn'>Logging out...</button>
					</li>
				)}
				{!isPending && (
					<li>
						<button className='btn' onClick={logout}>Logout</button>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Navbar