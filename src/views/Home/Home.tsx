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
import Background from 'components/Background/Background';
import Button from 'components/Button/Button';

const Home = () => {
	const [loading, setLoading] = useState(false);

	const handleSearch = (val: string) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<Background checkers={true}>
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
						<Button
							onClick={() => {
								console.log();
							}}
						>
							ASK QUESTION
						</Button>
					</TextWrapper>
					<Title>
						<Pink>Let's</Pink>
						<Pink>build</Pink>
						<Pink>our future,</Pink>
						<White>together.</White>
					</Title>
				</TeaserWrapper>
			</HomeWrapper>
		</Background>
	);
};

export default Home;
