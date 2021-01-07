import React, { useState } from 'react';
import './Settings.scss';
import { useCellsValue } from '../context/cells-context';

export default function Settings() {
	const { setRows, setCols, setBombs, setLive, setRefresh } = useCellsValue();

	const [tempCols, setTempCols] = useState<string>('9');
	const [tempRows, setTempRows] = useState<string>('9');
	const [tempBombs, setTempBombs] = useState<string>('9');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (parseInt(tempBombs) >= parseInt(tempCols) * parseInt(tempRows)) {
			alert('Covid conquered the city!');
			return;
		}
		setLive(true);
		setRows(parseInt(tempRows));
		setCols(parseInt(tempCols));
		setBombs(parseInt(tempBombs));
		setRefresh(true);
	};

	return (
		<div className="settings">
			<form className="settings__form" action="">
				<input
					type="number"
					placeholder="9"
					onChange={(e) => {
						setTempCols(e.target.value);
					}}
					value={tempCols}
				/>
				<input
					type="number"
					placeholder="9"
					onChange={(e) => {
						setTempRows(e.target.value);
					}}
					value={tempRows}
				/>
				<input
					type="number"
					placeholder="9"
					onChange={(e) => {
						setTempBombs(e.target.value);
					}}
					value={tempBombs}
				/>
				<button
					onClick={(e) => {
						handleSubmit(e);
					}}
				>
					New game
				</button>
			</form>
		</div>
	);
}
