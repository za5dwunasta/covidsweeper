import React, { useState, useEffect } from 'react';
import './App.scss';

import Logo from './assets/logo.png';

import Board from './layouts/Board';
import Button from './components/Button';
import DisplayData from './components/DisplayData';
import { useCellsValue } from './context/cells-context';
import Settings from './components/Settings';

function App() {
	const { bombsDisplay, live, time, setTime } = useCellsValue();
	const [settingsVisible, setSettingsVisible] = useState<boolean>(false);

	useEffect(() => {
		if (live && time < 999) {
			const timer = setInterval(() => {
				setTime(time + 1);
			}, 1000);

			return () => {
				clearInterval(timer);
			};
		}
	}, [live, time]);

	return (
		<div className="App">
			<div className="appname-container">
				<img src={Logo} alt="React Logo" />
				<DisplayData desc="COVID SPOTS LEFT" data={bombsDisplay} />
				<DisplayData desc="time" data={time} />
			</div>
			<Board />
			<Button text="new game" />

			<button className="board-settings" onClick={() => setSettingsVisible(!settingsVisible)}>
				change board size
			</button>
			{settingsVisible ? <Settings setSettingsVisable={setSettingsVisible} /> : ''}
		</div>
	);
}

export default App;
