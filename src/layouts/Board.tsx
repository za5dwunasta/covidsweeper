import React, { useState, useEffect } from 'react';
import { StatusType, ValueType, Cell, useCells } from '../hooks/useCells';
import Quarantine from '../assets/quarantine.svg';
import Coronavirus from '../assets/coronavirus.svg';
import { useCellsValue } from '../context/cells-context';
import { openCells } from '../helpers/openCells';

export default function Board() {
	const { rows, cols, cells, setCells, live, setLive } = useCellsValue();
	// const rows = 15;
	// const cols = 15;
	// const bombs = 20;
	// const { cells, setCells } = useCells(rows, cols, bombs);
	// const [live, setLive] = useState(true);

	const handleClick = (index: number) => {
		// e.preventDefault();
		if (!live) return;

		openCells(index, cells, setCells, cols, rows, setLive);
		// openCells(index);
	};
	const handleRightClick = (index: number) => {
		if (!live) return;
		let _cells: Cell[] = [...cells];
		if (_cells[index].status !== StatusType.flagged && _cells[index].status === StatusType.cover) {
			_cells[index].status = StatusType.flagged;
		} else if (_cells[index].status === StatusType.uncover) {
			return;
		} else {
			_cells[index].status = StatusType.cover;
		}
		setCells(_cells);
	};
	return (
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
							? ` board__cell--uncover color-${item.value}`
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
					) : item.status === StatusType.uncover && item.value !== ValueType.zero ? (
						`${item.value}`
					) : (
						''
					)}
				</button>
			))}
		</div>
	);
}
