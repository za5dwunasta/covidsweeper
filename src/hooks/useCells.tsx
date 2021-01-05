import { useState, useEffect } from 'react';

export enum StatusType {
	cover,
	uncover,
	flagged,
}

export enum ValueType {
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

export type Cell = {
	status: StatusType;
	value: ValueType;
};

export function useCells(rows: number, cols: number, bombs: number = 10) {
	const cellsNo = rows * cols;
	const [cells, setCells] = useState<Cell[]>([]);
	useEffect(() => {
		// step 1: generate plain table
		let _cells: Cell[] = Array(...Array(cellsNo)).map((_) => ({
			status: StatusType.cover,
			value: ValueType.zero,
		}));

		// step 2: put randomly N-bombs

		let bombsPlaced = 0;
		while (bombsPlaced < bombs) {
			let bombCellNo = Math.floor(Math.random() * cellsNo);

			if (_cells[bombCellNo].value !== ValueType.bomb) {
				_cells[bombCellNo].value = ValueType.bomb;
				bombsPlaced++;
			} else {
				continue;
			}
		}

		// step 3: put numbers

		for (let i = 0; i < cellsNo; i++) {
			if (_cells[i].value !== ValueType.bomb) {
				if (i === 0) {
				}
			}
		}

		setCells(_cells);

		console.log(cells);
	}, [cols, rows]);

	return { cells, setCells };
}
