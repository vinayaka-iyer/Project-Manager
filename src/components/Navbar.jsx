import React from 'react'
import './Navbar.css'
import Workshop from '../assets/workshop.svg'
import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
	const {logout, isPending} = useLogout()
	const { user } = useAuthContext()
	return (
		<div className='navbar'>
			<ul>
				<li className='logo'>
					<img src={Workshop} alt='workshop logo' />
					<span>The Workshop</span>
				</li>

				{!user && (
					<>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/signup'>Signup</Link>
						</li>
					</>
				)}
				{user && (
					<li>
						{isPending && (
							<button disabled className='btn'>
								Logging out...
							</button>
						)}
						{!isPending && (
							<button className='btn' onClick={logout}>
								Logout
							</button>
						)}
					</li>
				)}
			</ul>
		</div>
	);
};

export default Navbar