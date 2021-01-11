import React from 'react';
import './Button.scss';
import { useCellsValue } from '../context/cells-context';

type ButtonProps = {
	text: string;
	close?: (won: boolean) => void;
};

const Button: React.FunctionComponent<ButtonProps> = ({ text, close }) => {
	const { setRefresh, setLive, setTime } = useCellsValue();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setLive(true);
		setTime(0);
		setRefresh(true);
		if (close) {
			close(false);
		}
	};
	return (
		<button onClick={handleSubmit} className="button">
			{text}
		</button>
	);
};

export default Button;
