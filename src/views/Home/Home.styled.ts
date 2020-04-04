import styled from 'styled-components';
import { fontSize } from '../../utils/fonts';

export const HomeWrapper = styled.div`
	padding: 56px 10%;
	display: flex;
`;

export const TeaserWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
`;

export const TextWrapper = styled.div`
	width: 50%;
`;

export const TeaserTitle = styled.h2`
	color: white;
	display: flex;
	align-items: center;
	padding-bottom: 0px;
	margin-bottom:${()=> fontSize(24)};
	font-size: 40px;
	font-weight: 700;
`;

export const TeaserExplanation = styled.span`
	width: 100%;
	color: white;
	display: flex;
	font-size: ${() => fontSize(24)};
	margin-bottom: 40px;
	line-height: 1.67;
`;

export const Title = styled.div`
	width: 100%;
	color: white;
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;
	text-align: right;
	margin-left: auto;
`;
export const Pink = styled.span`
	display: flex;
	font-size: ${() => fontSize(120)};
	font-weight: bold;
	color: #d21a4a;
	text-align: right;
	margin-left: auto;
	line-height: normal;
`;
export const White = styled.span`
	color: white;
	display: flex;
	font-size: ${() => fontSize(140)};
	font-weight: bold;
	text-align: right;
	margin-left: auto;
	text-decoration: underline;
	line-height: normal;
`;
