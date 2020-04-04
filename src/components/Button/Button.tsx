import React from 'react';
import { ButtonWrapper, Label } from 'components/Button/Button.styled';

interface IProps {
	onClick: () => void;
	children: string;
}

const Button = ({ onClick, children}: IProps) => {
	return (
		<ButtonWrapper onClick={() => onClick()}>
			<Label>{children}</Label>
		</ButtonWrapper>
	);
};

export default Button;
