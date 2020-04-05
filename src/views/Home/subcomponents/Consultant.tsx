import React from 'react';
import {
	ConsultantWrapper,
	ChatbotWrapper,
	SearchInput,
	SearchInputWrapper,
	WhiteMessage,
	RedMessage,
} from './Consultant.styled';
import ReactPlayer from 'react-player';

const Consultant = ({ onClick }: any) => {
	return (
		<ConsultantWrapper>
			<ReactPlayer url={'https://www.youtube.com/watch?v=S2s7nsn-YpA'} width={'100%'} height={'55vh'} />
			<ChatbotWrapper>
				<WhiteMessage>
					Let me help you with your issue. Please explain shortly what is your problem
				</WhiteMessage>
				<RedMessage>
					I have a problem with my webcam! The diode is blinking. I'm helpless
				</RedMessage>
				<SearchInputWrapper>
					<SearchInput placeholder={'Enter the message content'} />
				</SearchInputWrapper>
			</ChatbotWrapper>
		</ConsultantWrapper>
	);
};

export default Consultant;
