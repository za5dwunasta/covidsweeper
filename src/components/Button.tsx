import React from 'react';
import './Button.scss';

type ButtonProps = {
	text: string;
};

const Button: React.FunctionComponent<ButtonProps> = ({ text }) => {
	return <button className="button">{text}</button>;
};

export default Button;
