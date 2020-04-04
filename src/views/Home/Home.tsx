import React, { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import {
	HomeWrapper,
	TeaserWrapper,
	TeaserTitle,
	TeaserExplanation,
	TextWrapper,
	Title,
	Pink,
	White,
	SearchWrapper,
	SearchLabel,
	SearchInputWrapper,
	SearchInput,
	SearchButtonWrapper,
	SearchCard,
	CardsContainer,
	CardPhoto,
	CardLabel,
} from './Home.styled';
import Background, { backgrounds } from 'components/Background/Background';
import Button from 'components/Button/Button';

const Home = () => {
	const [step, setStep] = useState('home');

	const handleOpenSearch = () => {
		setStep('search');
	};

	const rightSideContent = () => {
		switch (step) {
			case 'home': {
				return (
					<Title>
						<Pink>Let's</Pink>
						<Pink>build</Pink>
						<Pink>our future,</Pink>
						<White>together.</White>
					</Title>
				);
			}
			case 'search': {
				return (
					<SearchWrapper>
						<SearchLabel>Ask a question</SearchLabel>
						<SearchInputWrapper>
							<SearchInput placeholder={'Type your question'} />
						</SearchInputWrapper>
						<SearchButtonWrapper>
							<Button size={'small'} onClick={() => {}}>
								SEND QUESTION
							</Button>
						</SearchButtonWrapper>
						<SearchLabel>Frequently asked questions</SearchLabel>
						<CardsContainer>
							<SearchCard>
								<CardPhoto />
								<CardLabel>Cosmetic surgery abroad making the right choice</CardLabel>
							</SearchCard>
							<SearchCard>
								<CardPhoto />
								<CardLabel>Cosmetic surgery abroad making the right choice</CardLabel>
							</SearchCard>
							<SearchCard>
								<CardPhoto />
								<CardLabel>Cosmetic surgery abroad making the right choice</CardLabel>
							</SearchCard>
						</CardsContainer>
					</SearchWrapper>
				);
			}
		}
	};
	return (
		<Background checkers={step as keyof typeof backgrounds}>
			<Navbar selected={1} />
			<HomeWrapper>
				<TeaserWrapper>
					<TextWrapper>
						<TeaserTitle>Ask a question</TeaserTitle>
						<TeaserExplanation>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</TeaserExplanation>
						<Button onClick={handleOpenSearch}>ASK QUESTION</Button>
					</TextWrapper>
					{rightSideContent()}
				</TeaserWrapper>
			</HomeWrapper>
		</Background>
	);
};

export default Home;
