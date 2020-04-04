import styled from 'styled-components';
import { fontSize } from 'utils/fonts';
import photo from 'assets/images/photo.png';

export const ChoiceWrapper = styled.div`
	width: 100vh;
	height: 60vh;
	padding: 16px;
`;

export const ChoiceHeader = styled.span`
	color: #d21a4a;
	display: flex;
	font-size: ${() => fontSize(16)};
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.5;
	letter-spacing: normal;
	color: #ffffff;
	padding: 32px 72px 48px;
`;

export const OptionsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 24px;
`;

export const OptionWrapper = styled.div`
    
	display: flex;
	flex-direction: column;
	margin: 0 16px;
`;
export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const OptionTitle = styled.span`
	color: #d21a4a;
	font-size: ${() => fontSize(40)};
	font-weight: 700;
	margin-left: 16px;
`;

export const OptionDesc = styled.span`
	color: #ffffff;
	font-size: ${() => fontSize(24)};
	font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #ffffff;
  margin: 16px 0;
}
`;

export const ChoiceButton = styled.span`
	color: #ffffff;
	font-size: ${() => fontSize(16)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #d21a4a;
  position: relative;
  cursor: pointer;
  ::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 60px;
    height: 1px;
    background-color: #d21a4a;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  :hover {
    ::after{
    opacity: 1;
    } 
  }

}
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
