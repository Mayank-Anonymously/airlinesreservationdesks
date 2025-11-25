import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiCustomerServiceFill } from 'react-icons/ri';
import CallNowBanner from './Callbtn';
import Link from 'next/link';
const Header = () => {
	return (
		<header>
			<Navbar
				expand='lg'
				className='bg-body-tertiary'>
				<Container>
					<Navbar.Brand href='/'>
						<img
							src='/assets/logo/logo.png'
							className='logo-img'
							alt="logo-header"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Link
								href='/'
								className='menu-link nav-link'>
								Home
							</Link>
							<Link
								href='/about-us'
								className='menu-link nav-link'>
								About{' '}
							</Link>
							<Link
								href='/contact-us'
								className='menu-link nav-link'>
								{' '}
								Contact{' '}
							</Link>
							<Link
								href='/contact-us'
								className='menu-link nav-link'>
								{' '}
								Blog{' '}
							</Link>
							<Link
								href='/contact-us'
								className='menu-link nav-link'>
								{' '}
								Terms and Conditions{' '}
							</Link>
						</Nav>
					</Navbar.Collapse>

					<CallNowBanner />
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
