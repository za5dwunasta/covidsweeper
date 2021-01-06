import React from 'react';
import './App.scss';

import Logo from './assets/logo.png';

import Board from './layouts/Board';
import { CellsProvider } from './context/cells-context';

function App() {
	return (
		<CellsProvider>
			<div className="App">
				<div className="appname-container">
					<img src={Logo} alt="React Logo" />
				</div>
				<Board />
			</div>
		</CellsProvider>
	);
}

export default App;
