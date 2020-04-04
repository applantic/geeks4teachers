import React from 'react';
import { ButtonWrapper, Label } from 'components/Button/Button.styled';

interface IProps {
	onClick: () => void;
	children: string;
	size?: 'large' | 'small';
}

const Button = ({ onClick, children, size = 'large' }: IProps) => {
	return (
		<ButtonWrapper onClick={() => onClick()} size={size}>
			<Label size={size}>{children}</Label>
		</ButtonWrapper>
	);
};

export default Button;
