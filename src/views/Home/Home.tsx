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
import Choice from './subcomponents/Choice';
import Consultant from './subcomponents/Consultant';

const Home = () => {
	const [step, setStep] = useState('home');

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
				return <Choice onClick={handleConsultant} />;
			}
			case 'consultant': {
				return <Consultant onClick={handleConsultant} />;
			}
		}
	};

	const leftSideTitle = () => {
		switch (step) {
			case 'home': {
				return "Let's help teachers";
			}
			case 'search': {
				return 'Find a solution';
			}
			case 'choice': {
				return 'You have a choice!';
			}
			case 'consultant': {
				return 'Connect with our consultant!';
			}
		}
	};
	const leftSideExp = () => {
		switch (step) {
			case 'home': {
				return "G4T is an educational platform created by engineers and online learning enthusiasts. If you are a teacher and have any problems teaching your students online, here is the solution.";
			}
			case 'search': {
				return 'The problems that other teachers face are very often the same as yours. Before you connect with one of our consultants, check our knowledge base. Your solution is probably here!';
			}
			case 'choice': {
				return 'Geeks4Teachers gives you a lot of choice. You can use our knowledge base to find a solution or ask our ChatBot for it. If he can\'t help you, you can always connect with one of our online consultants!';
			}
			case 'consultant': {
				return 'Our consultant will give you appropriate advice. You can connect with him through the camera, microphone or just send him a message!';
			}
		}
	};
	return (
		<Background checkers={step as keyof typeof backgrounds}>
			<Navbar selected={1} />
			<HomeWrapper>
				<TeaserWrapper>
					<TextWrapper>
						<TeaserTitle>{leftSideTitle()}</TeaserTitle>
						<TeaserExplanation>{leftSideExp()}</TeaserExplanation>
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
