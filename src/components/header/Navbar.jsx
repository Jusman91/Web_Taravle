import '../header/NavbarStyles.css';
import { Link } from 'react-router-dom';
import Logo from '../../asset/logo/p1.png';
import { useState } from 'react';
import {
	IoIosArrowDown,
	IoIosArrowUp,
} from 'react-icons/io';
import HoverData from './HoverData';
import HoverHotels from './HoverHotels';
import HoverXperiences from './HoverXperiences';
import HoverTourPackages from './HoverTourPackages';
import HoverInsurance from './HoverInsurance';

function Navbar(props) {
	const [activeLink, setActiveLink] = useState('/');

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};
	return (
		<header>
			<div className='top-header'>
				<ul className='pt-3'>
					<li>Corparate Trapel</li>
					<li>MICE</li>
					<li>Smailing Platinum</li>
				</ul>
				<div className='login'>
					<button onClick={() => props.setShowFormLogin()}>
						Login
					</button>
					<IoIosArrowDown />
				</div>
			</div>

			<nav className='navbar-items pb-0'>
				<div className='nav-logo'>
					<h1>
						NGAKAK <span>TOUR</span>
					</h1>
					<p>Trapel Management Experts</p>
					<img src={Logo} alt='logo' />
				</div>
				<ul className='nav-menu'>
					<li className='nav-links'>
						<div>
							<Link
								to='/'
								className={
									activeLink === '/' ? 'active' : ''
								}
								onClick={() => onUpdateActiveLink('/')}>
								Home
							</Link>
						</div>
						<div className='hover'>
							<Link
								to='/flights'
								className={
									activeLink === 'flights' ? 'active' : ''
								}
								onClick={() =>
									onUpdateActiveLink('flights')
								}>
								Flights
							</Link>
							<div className='icons-hover'>
								<IoIosArrowUp />
							</div>
							<HoverData />
						</div>
						<div className='hover'>
							<Link
								to='/hotels'
								className={
									activeLink === 'hotels' ? 'active' : ''
								}
								onClick={() =>
									onUpdateActiveLink('hotels')
								}>
								Hotels
							</Link>
							<div className='icons-hover'>
								<IoIosArrowUp />
							</div>
							<HoverHotels />
						</div>
						<div className='hover'>
							<Link
								to='/tourpackages'
								className={
									activeLink === 'tourpackages'
										? 'active'
										: ''
								}
								onClick={() =>
									onUpdateActiveLink('tourpackages')
								}>
								Tour Packages
							</Link>
							<div className='icons-hover'>
								<IoIosArrowUp />
							</div>
							<HoverTourPackages />
						</div>
						<div className='hover'>
							<Link
								to='/xperiences'
								className={
									activeLink === 'xperiences'
										? 'active'
										: ''
								}
								onClick={() =>
									onUpdateActiveLink('xperiences')
								}>
								Xperiences
							</Link>
							<div className='icons-hover'>
								<IoIosArrowUp />
							</div>
							<HoverXperiences />
						</div>
						<div>
							<Link
								to='/attractions'
								className={
									activeLink === 'attractions'
										? 'active'
										: ''
								}
								onClick={() =>
									onUpdateActiveLink('attractions')
								}>
								Attractions
							</Link>
						</div>
						<div>
							<Link>Visa</Link>
						</div>
						<div className='hover'>
							<Link>Insurance</Link>
							<div className='icons-hover-insurance'>
								<IoIosArrowUp />
							</div>
							<HoverInsurance />
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
