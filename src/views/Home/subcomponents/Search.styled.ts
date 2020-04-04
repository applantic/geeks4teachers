import styled from 'styled-components';
import { fontSize } from 'utils/fonts';
import photo from 'assets/images/photo.png';

export const SearchWrapper = styled.div`
	width: 80vh;
	height: 60vh;
	padding: 16px;
`;

export const SearchLabel = styled.span`
	color: #d21a4a;
	display: flex;
	font-size: ${() => fontSize(16)};
	font-weight: 300;
	margin-bottom: 16px;
`;

export const SearchInputWrapper = styled.div`
	display: flex;
	padding-bottom: 8px;
	border-bottom: solid 1px #979797;
	width: calc(100% - 20vh);
	margin-bottom: 16px;
`;

export const SearchButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	width: calc(100% - 20vh);
	margin-bottom: 20vh;
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

export const CardsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: no-wrap;
`;

export const SearchCard = styled.div`
	display:flex;
	flex-direction: column;
	width: 25vh;
	height: 20vh;
	background: white;
	border-radius: 20px;
	margin-right 24px;
	padding: 16px;
`;

export const CardPhoto = styled.div`
	width: 100%;
	height: 120px;
	background: url(${photo});
	background-size: cover;
`;

export const CardLabel = styled.span`
	color: #000000;
	font-size: ${() => fontSize(16)};
	font-weight: 300;
`;
