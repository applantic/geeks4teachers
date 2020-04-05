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
				<WhiteMessage>I have a terrible problem with my microphone, my students can't hear me :(</WhiteMessage>
				<RedMessage>Hello Mr. Smith</RedMessage>
				<RedMessage>What system do you use? </RedMessage>
				<SearchInputWrapper>
					<SearchInput placeholder={'Enter the message content'} />
				</SearchInputWrapper>
			</ChatbotWrapper>
		</ConsultantWrapper>
	);
};

export default Consultant;
