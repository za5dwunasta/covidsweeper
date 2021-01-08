import React, { useState } from 'react';
import './Settings.scss';
import { useCellsValue } from '../context/cells-context';

type SettingsProps = {
	setSettingsVisable: (settingsVisable: boolean) => void;
};

const Settings: React.FunctionComponent<SettingsProps> = ({ setSettingsVisable }) => {
	const { setRows, setCols, setBombs, setLive, setRefresh, setTime } = useCellsValue();
	const [tempCols, setTempCols] = useState<string>('9');
	const [tempRows, setTempRows] = useState<string>('9');
	const [tempBombs, setTempBombs] = useState<string>('9');
	const [customCols, setCustomCols] = useState<string>('9');
	const [customRows, setCustomRows] = useState<string>('9');
	const [customBombs, setCustomBombs] = useState<string>('9');

	const [customEdit, setCustomEdit] = useState<boolean>(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (parseInt(customBombs) >= parseInt(customCols) * parseInt(customRows)) {
			alert('Covid conquered the city!');
			return;
		}
		setLive(true);
		setRows(parseInt(tempRows));
		setCols(parseInt(tempCols));
		setBombs(parseInt(tempBombs));
		setTime(0);
		setSettingsVisable(false);
		setRefresh(true);
	};

	return (
		<div className="settings">
			<form className="settings__form" action="">
				<div className="settings__line">
					<div className="settings__radio_button"></div>
					<span>
						<b>WIDTH</b>
					</span>
					<span>
						<b>HEIGHT</b>
					</span>
					<span>
						<b>BOMBS</b>
					</span>
				</div>
				<div className="settings__line">
					<div className="settings__radio_button">
						<input
							type="radio"
							id="beginner"
							name="level"
							value="beginner"
							onClick={() => {
								setTempCols('9');
								setTempRows('9');
								setTempBombs('10');
								setCustomEdit(false);
							}}
						/>
						<label htmlFor="beginner">beginner</label>
					</div>
					<span>9</span>
					<span>9</span>
					<span>10</span>
				</div>
				<div className="settings__line">
					<div className="settings__radio_button">
						<input
							type="radio"
							id="intermediate"
							name="level"
							value="intermediate"
							onClick={() => {
								setTempCols('16');
								setTempRows('16');
								setTempBombs('40');
								setCustomEdit(false);
							}}
						/>
						<label htmlFor="intermediate">intermediate</label>
					</div>
					<span>16</span>
					<span>16</span>
					<span>40</span>
				</div>{' '}
				<div className="settings__line">
					<div className="settings__radio_button">
						<input
							type="radio"
							id="advanced"
							name="level"
							value="advanced"
							onClick={() => {
								setTempCols('30');
								setTempRows('16');
								setTempBombs('99');
								setCustomEdit(false);
							}}
						/>
						<label htmlFor="advanced">advanced</label>
					</div>
					<span>30</span>
					<span>16</span>
					<span>99</span>
				</div>
				<div className="settings__line">
					<div className="settings__radio_button">
						<input
							type="radio"
							id="custom"
							name="level"
							value="custom"
							onClick={() => {
								setTempCols(customCols);
								setTempRows(customRows);
								setTempBombs(customBombs);
								setCustomEdit(true);
							}}
						/>
						<label htmlFor="custom">custom</label>
					</div>
					<span>
						<input
							className="settings__input"
							type="number"
							placeholder="9"
							onChange={(e) => {
								setCustomCols(e.target.value);
								if (customEdit) {
									setTempCols(e.target.value);
								}
							}}
							value={customCols}
						/>
					</span>
					<span>
						<input
							className="settings__input"
							type="number"
							placeholder="9"
							onChange={(e) => {
								setCustomRows(e.target.value);
								if (customEdit) {
									setTempRows(e.target.value);
								}
							}}
							value={customRows}
						/>
					</span>
					<span>
						<input
							className="settings__input"
							type="number"
							placeholder="9"
							onChange={(e) => {
								setCustomBombs(e.target.value);
								if (customEdit) {
									setTempBombs(e.target.value);
								}
							}}
							value={customBombs}
						/>
					</span>
				</div>
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
};

export default Settings;
