import React, { useState, useEffect } from 'react';
import './App.scss';

enum StatusType {
	cover,
	uncover,
	flagged,
}

enum ValueType {
	zero,
	one,
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	bomb,
}

type Cell = {
	status: StatusType;
	value: ValueType;
};

function App() {
	const [cells, setCells] = useState<Cell[]>([]);

	useEffect(() => {
		let _cells: Cell[] = [];
		_cells.length = 81;
		for (let i = 0; i < 81; i++) {
			_cells[i] = { status: StatusType.cover, value: ValueType.bomb };
		}
		setCells(_cells);
		console.log(cells);
	}, []);

	const handleClick = (index: number) => {
		let _cells: Cell[] = [...cells];
		_cells[index].status = StatusType.uncover;
		setCells(_cells);
	};

	return (
		<div className="App">
			<div className="board">
				{cells.map((item, index) => (
					<button onClick={() => handleClick(index)} className="board__cell" key={index}></button>
				))}
			</div>
		</div>
	);
}

export default App;
