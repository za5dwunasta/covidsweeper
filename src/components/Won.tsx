import React, { useRef } from 'react';
import Button from './Button';
import './Won.scss';

type WonProps = {
	setWon: (won: boolean) => void;
};

const Won: React.FunctionComponent<WonProps> = ({ setWon }) => {
	const outer = useRef() as React.MutableRefObject<HTMLDivElement>;

	const handleCloseModal = (e: React.MouseEvent<HTMLInputElement>) => {
		// const domNode: any = ReactDOM.findDOMNode(outer);
		const { current } = outer;
		const target: any = e.target;
		if (current !== target) {
			return;
		}

		console.log(current);
		console.log(target);
		setWon(false);
	};

	return (
		<div ref={outer} className="wonbox__overlay" onClick={(e: any) => handleCloseModal(e)}>
			<div className="wonbox">
				Congrats! You won!
				<Button text="play again" close={setWon} />
			</div>
		</div>
	);
};

export default Won;
