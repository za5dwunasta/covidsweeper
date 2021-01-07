import React from 'react';
import './Button.scss';
import { useCellsValue } from '../context/cells-context';

type ButtonProps = {
	text: string;
};

const Button: React.FunctionComponent<ButtonProps> = ({ text }) => {
	const { setRefresh, setLive } = useCellsValue();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setLive(true);
		setRefresh(true);
	};
	return (
		<button onClick={handleSubmit} className="button">
			{text}
		</button>
	);
};

export default Button;
