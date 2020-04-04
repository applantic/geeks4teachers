import React from 'react';
import { NavbarWrapper, LogoWrapper, Logo, Label, Item, MenuWrapper } from './Navbar.styled';
import { Link } from 'react-router-dom';

interface IProps {
	selected: number;
}

const Navbar = ({ selected }: IProps) => {
	return (
		<NavbarWrapper>
			<LogoWrapper>
				<Logo />
			</LogoWrapper>

			<MenuWrapper>
				<Link to={'/'}>
					<Item selected={selected === 1}>Ask question</Item>
				</Link>
				<Link to={'/new-volunteer'}>
					<Item selected={selected === 2}>Become Volunteer</Item>
				</Link>
				<Link to={'/construction'}>
					<Item selected={selected === 3}>Contact</Item>
				</Link>
			</MenuWrapper>
		</NavbarWrapper>
	);
};

export default Navbar;
