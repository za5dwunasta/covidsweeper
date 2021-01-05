import React, { useState, useEffect } from 'react';
import './App.scss';
import Quarantine from './assets/quarantine.svg';
import Coronavirus from './assets/coronavirus.svg';

import { StatusType, ValueType, Cell, useCells } from './hooks/useCells';

function App() {
	const { cells, setCells } = useCells(9, 9);

	const handleClick = (index: number) => {
		// e.preventDefault();
		let _cells: Cell[] = [...cells];
		_cells[index].status = StatusType.uncover;
		setCells(_cells);
	};
	const handleRightClick = (index: number) => {
		let _cells: Cell[] = [...cells];
		_cells[index].status = StatusType.flagged;
		setCells(_cells);
	};

	return (
		<>
			<div className="App">
				<div className="appname-container">
					<span className="name__red">Covid-19</span>
					<span className="name__orange">Covid-19</span>
				</div>
				<div className="board">
					{cells.map((item, index) => (
						<button
							onClick={(e): void => handleClick(index)}
							onContextMenu={(e): void => {
								e.preventDefault();
								handleRightClick(index);
							}}
							className={`board__cell${
								item.status === StatusType.uncover
									? ' board__cell--uncover'
									: item.status === StatusType.flagged
									? ' board__cell--flagged'
									: ''
							}`}
							key={index}
						>
							{item.status === StatusType.flagged ? (
								<img src={Quarantine} alt="React Logo" />
							) : item.status === StatusType.uncover && item.value === ValueType.bomb ? (
								<img src={Coronavirus} alt="React Logo" />
							) : (
								''
							)}
						</button>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
