import styled from 'styled-components';
import { fontSize } from 'utils/fonts';
import photo from 'assets/images/photo.png';

export const ConsultantWrapper = styled.div`
	width: 100vh;
	height: 100vh;
	margin-top: -20vh;
	padding: 16px;
`;

export const ChatbotWrapper = styled.div`
	width: 100vh;
	height: 40vh;
	padding: 16px;
	position: relative;
	padding-top:64px;
	padding-right:48px;
`;

export const SearchInputWrapper = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	flex-direction:column;
	padding-bottom: 8px;
	border-bottom: solid 1px #979797;
	width: 90%;
	margin-bottom: 16px;
`;

export const WhiteMessage = styled.div`
	background: white;
	font-size: ${() => fontSize(24)};
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.35;
	letter-spacing: -0.07px;
	color: rgba(0, 0, 0, 0.87);
	padding: 16px;
	border-radius: 32px;
	background-color: #ededed;
	margin-bottom: 24px;
	max-width: 50%;
`;

export const RedMessage = styled.div`
	background: #d21a4a;
	font-size: ${() => fontSize(24)};
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.35;
	letter-spacing: -0.07px;
	color: rgba(255, 255, 255, 0.87);
	padding: 16px;
	border-radius: 32px;
	margin-bottom: 24px;
	max-width: 50%;
	align-self: flex-end;
	margin-left:auto;
`;

export const SearchInput = styled.input`
	width: 100%;
	background: transparent;
	outline: none;
	border: none;
	display: flex;
	color: white;
	font-weight: 300;
	font-size: ${() => fontSize(24)};
`;
