import React from 'react';
import {
	BackgroundWrapper,
	CheckersWrapper,
	CheckerBox,
	Checker,
	ContentWrapper,
	AccentChecker,
} from 'components/Background/Background.styled';

import person1 from 'assets/images/person1.jpg';
import person2 from 'assets/images/person2.jpg';
import person3 from 'assets/images/person3.jpg';
import person4 from 'assets/images/person4.jpg';

interface IProps {
	children: React.ReactElement | React.ReactElement[];
	checkers?: boolean;
}

const homeCheckers = [
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'red', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20, picture: person2 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20, picture: person1 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'red', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20, picture: person3 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'red', time: Math.random() * 20 },
	{ type: 'black', time: Math.random() * 20 },
	{ type: 'red', time: Math.random() * 20, picture: person4 },
	{ type: 'black', time: Math.random() * 20 },
];

const Background = ({ children, checkers }: IProps) => {
	return (
		<BackgroundWrapper>
			<AccentChecker>
				<CheckerBox type={'red'} />
			</AccentChecker>

			{checkers && (
				<CheckersWrapper>
					{homeCheckers.map((checker) => {
						return (
							<Checker>
								<CheckerBox type={checker.type} picture={checker.picture} />
								{/*<Image picture={checker.picture} time={checker.time} />*/}
							</Checker>
						);
					})}
				</CheckersWrapper>
			)}
			<ContentWrapper>{children}</ContentWrapper>
		</BackgroundWrapper>
	);
};
export default Background;
