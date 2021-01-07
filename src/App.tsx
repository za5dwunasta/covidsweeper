import React, { useState } from 'react';
import './App.scss';

import Logo from './assets/logo.png';

import Board from './layouts/Board';
import { CellsProvider } from './context/cells-context';
import Button from './components/Button';
import DisplayData from './components/DisplayData';
import { useCellsValue } from './context/cells-context';
import Settings from './components/Settings';

function App() {
	const { bombs, live } = useCellsValue();
	const [time, setTime] = useState<number>(0);

	return (
		<CellsProvider>
			<div className="App">
				<div className="appname-container">
					<img src={Logo} alt="React Logo" />
					<DisplayData desc="COVID SPOTS LEFT" data={bombs} />
					<DisplayData desc="time" data={23} />
				</div>
				<Board />
				<Button text="new game" />
				<span className="board-settings">change board size</span>
				<Settings />
			</div>
		</CellsProvider>
	);
}

export default App;
