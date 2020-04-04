import styled from 'styled-components';
import logo from 'assets/logo.svg';

export const NavbarWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 100px 60px 0;
`;

export const LogoWrapper = styled.div`
	padding: 16px;
	display: flex;
	align-items: center;
`;

export const Logo = styled.div`
	height: 63px;
	width: 311px;
	background: url(${logo});
`;

export const Label = styled.span`
	font-size: 22px;
	padding: 0 12px;
`;

export const Item = styled.div<{ selected?: boolean }>`
	margin: 0 32px;
	font-size: ProximaNova;
	font-weight: bold;
	${({ selected }) => {
		return {
			borderBottom: selected ? 'solid 2px #d21a4a': 'none',
			color: selected ? '#d21a4a' : '#fff',
		};
	}}
`;
export const MenuWrapper = styled.div`
	display: flex;
`;
