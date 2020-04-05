import React from 'react';
import {
	ChoiceWrapper,
	ChoiceHeader,
	OptionsWrapper,
	OptionWrapper,
	TitleWrapper,
	OptionTitle,
	OptionDesc,
	ChoiceButton
} from './Choice.styled';
import man from 'assets/images/man.svg';
import chat from 'assets/images/chat.svg';
import book from 'assets/images/book.svg';

const Choice = ({onClick}:any) => {
	return (
		<ChoiceWrapper>
			<ChoiceHeader>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</ChoiceHeader>
			<OptionsWrapper>
				<OptionWrapper>
					<TitleWrapper>
						<img src={man} />
						<OptionTitle>Consultant</OptionTitle>
					</TitleWrapper>
					<OptionDesc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </OptionDesc>
					<ChoiceButton onClick={onClick}>Choose</ChoiceButton>
				</OptionWrapper>
				<OptionWrapper>
					<TitleWrapper>
						<img src={chat} />
						<OptionTitle>Chatbot</OptionTitle>
					</TitleWrapper>
					<OptionDesc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </OptionDesc>
					<ChoiceButton>Choose</ChoiceButton>
				</OptionWrapper>
				<OptionWrapper>
					<TitleWrapper>
						<img src={book} />
						<OptionTitle>Knowledge Base</OptionTitle>
					</TitleWrapper>
					<OptionDesc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </OptionDesc>
					<ChoiceButton>Choose</ChoiceButton>
				</OptionWrapper>
			</OptionsWrapper>
		</ChoiceWrapper>
	);
};

export default Choice;
