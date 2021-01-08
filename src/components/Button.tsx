import React from 'react';
import './Button.scss';
import { useCellsValue } from '../context/cells-context';

type ButtonProps = {
	text: string;
};

const Button: React.FunctionComponent<ButtonProps> = ({ text }) => {
	const { setRefresh, setLive, setTime } = useCellsValue();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setLive(true);
		setTime(0);
		setRefresh(true);
	};
	return (
		<button onClick={handleSubmit} className="button">
			{text}
		</button>
	);
};

export default Button;
