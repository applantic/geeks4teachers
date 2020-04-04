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

export const backgrounds = {
	home: {
		grid: {
			columns: 'repeat(5, 20vh)',
			rows: 'repeat(5, 20vh)',
		},
		areas: [
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'red' },
			{ type: 'black' },
			{ type: 'black', picture: person2 },
			{ type: 'black' },
			{ type: 'black', picture: person1 },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'red' },
			{ type: 'black', picture: person3 },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'red' },
			{ type: 'black' },
			{ type: 'red', picture: person4 },
			{ type: 'black' },
		],
	},
	search: {
		grid: {
			columns: '20vh 60vh 20vh',
			rows: '20vh 60vh 20vh',
		},
		areas: [
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'red' },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'black' },
			{ type: 'red' },
			{ type: 'black' },
		],
	},
};

interface IProps {
	children: React.ReactElement | React.ReactElement[];
	checkers?: keyof typeof backgrounds;
}

const Background = ({ children, checkers }: IProps) => {
	return (
		<BackgroundWrapper>
			<AccentChecker>
				<CheckerBox type={'red'} />
			</AccentChecker>

			{checkers && (
				<CheckersWrapper grid={backgrounds[checkers].grid}>
					{Array.isArray(backgrounds[checkers].areas) &&
						// @ts-ignore
						backgrounds[checkers].areas.map((checker: any) => {
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
