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
} from './Home.styled';
import Background, { backgrounds } from 'components/Background/Background';
import Button from 'components/Button/Button';
import Search from './subcomponents/Search';
import Choice from "./subcomponents/Choice";
import Consultant from "./subcomponents/Consultant";

const Home = () => {
	const [step, setStep] = useState('consultant');

	const handleOpenSearch = () => {
		setStep('search');
	};

	const handleSearchQuestion = () => {
		setStep('choice');
	};

	const handleConsultant = () => {
		setStep('consultant');
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
				return <Search onClick={handleSearchQuestion} />;
			}
			case 'choice': {
				return (
					<Choice onClick={handleConsultant} />
				);
			}
			case 'consultant': {
				return (
					<Consultant onClick={handleConsultant} />
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
						<div style={{ opacity: step === 'home' ? 1 : 0 }}>
							<Button onClick={handleOpenSearch}>ASK QUESTION</Button>
						</div>
					</TextWrapper>
					{rightSideContent()}
				</TeaserWrapper>
			</HomeWrapper>
		</Background>
	);
};

export default Home;
