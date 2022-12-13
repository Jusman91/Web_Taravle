import '../header/NavbarStyles.css';
import { Link } from 'react-router-dom';
import Logo from '../../asset/logo/p1.png';
import { HiThumbUp } from 'react-icons/hi';
import { useState } from 'react';

function Navbar() {
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
					<button>Login</button>
					<i className='bi bi-caret-down'></i>
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
							<div className='container-banner'>
								<div className='text-banner'>
									<p>Save The Dates</p>
									<h2>Private X</h2>
									<button>Call Now</button>
									<button>Prebook Now</button>
								</div>
								<div className='banner'>
									<div className='des-banner'>
										<h3>Join Ngakak Private Journey</h3>
										<h4>with family and friends</h4>
									</div>
									<div className='destination-list'>
										<h2>Other populer destination</h2>
										<div className='wrapp-list'>
											<div>
												<div className='a-list'>
													<div>Singapur</div>
													<HiThumbUp className='icon' />
												</div>
												<div className='a-list'>
													<div>Hong Kong</div>
													<HiThumbUp className='icon' />
												</div>
												<div>Macao</div>
												<div>Shanghai</div>
												<div className='a-list'>
													<div>Korea</div>
													<HiThumbUp className='icon' />
												</div>
												<div>France</div>
											</div>
											<div>
												<div>Italy</div>
												<div>Greece</div>
												<div>Spain</div>
												<div className='a-list'>
													<div>Bali</div>
													<HiThumbUp className='icon' />
												</div>
												<div>Bangkok</div>
												<div>Kuala Lumpur</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
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
						</div>
						<div>
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
						</div>
						<div>
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
						</div>
						<div>
							<Link to='/attractions'>Attractions</Link>
						</div>
						<div>
							<Link to='/visa'>Visa</Link>
						</div>
						<div>
							<Link to='/insurance'>Insurance</Link>
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;