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
			<span className="board-settings">change board size</span>
			<Settings />
		</div>
	);
}

export default App;
