import styled from 'styled-components';
import { fontSize } from '../../utils/fonts';

export const ButtonWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center
	cursor: pointer;
	background-color: #9b0e33;
	border-radius: 36px;
	box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.54), 0 5px 15px 0 rgba(0, 0, 0, 0.24);	
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:hover{
		background: #d21a4a;
	}
`;

export const Label = styled.span`
	text-transform: uppercase;
	text-align: center;
	font-size: ${() => fontSize(24)};
	padding: 22px 98px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #ffffff;
`;
