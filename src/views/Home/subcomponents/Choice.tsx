import React from 'react';
import {
	ChoiceWrapper,
	ChoiceHeader,
	OptionsWrapper,
	OptionWrapper,
	TitleWrapper,
	OptionTitle,
	OptionDesc,
	ChoiceButton,
} from './Choice.styled';
import man from 'assets/images/man.svg';
import chat from 'assets/images/chat.svg';
import book from 'assets/images/book.svg';

const Choice = ({ onClick }: any) => {
	return (
		<ChoiceWrapper>
			<ChoiceHeader>
				Remember that if you choose to talk to one of our online consultants, you will need to be patient. The
				expected waiting time will be available after clicking on the consultant section.
			</ChoiceHeader>
			<OptionsWrapper>
				<OptionWrapper>
					<TitleWrapper>
						<img src={man} />
						<OptionTitle>Consultant</OptionTitle>
					</TitleWrapper>
					<OptionDesc>Chat with one of our online consultants.</OptionDesc>
					<ChoiceButton onClick={onClick}>Choose</ChoiceButton>
				</OptionWrapper>
				<OptionWrapper>
					<TitleWrapper>
						<img src={chat} />
						<OptionTitle>Chatbot</OptionTitle>
					</TitleWrapper>
					<OptionDesc>Our ChatBot really knows a lot about various technological problems. </OptionDesc>
					<ChoiceButton>Choose</ChoiceButton>
				</OptionWrapper>
				<OptionWrapper>
					<TitleWrapper>
						<img src={book} />
						<OptionTitle>Knowledge</OptionTitle>
					</TitleWrapper>
					<OptionDesc>
						Our knowledge base will help you solve the problem or improve online learning.{' '}
					</OptionDesc>
					<ChoiceButton>Choose</ChoiceButton>
				</OptionWrapper>
			</OptionsWrapper>
		</ChoiceWrapper>
	);
};

export default Choice;
