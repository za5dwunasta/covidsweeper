import { useState, useEffect } from 'react';

export enum StatusType {
	cover,
	uncover,
	flagged,
}

export enum ValueType {
	zero = 0,
	one = 1,
	two = 2,
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

export function useCells(rows: number, cols: number, bombs: number = 10, setRefresh: Function, refresh: boolean) {
	const cellsNo: number = rows * cols;
	const root = document.documentElement;
	root.style.setProperty('--cols', `${cols}`);
	const [cells, setCells] = useState<Cell[]>([]);
	useEffect(() => {
		if (!refresh) return;

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
			let numberOfBombs: number = 0;
			if (_cells[i].value !== ValueType.bomb) {
				if (i > 0 && i < cols - 1) {
					// first row w/o corners
					if (_cells[i - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols + 1].value === ValueType.bomb) numberOfBombs++;
				} else if (i > cellsNo - cols && i < cellsNo - 1) {
					// last row w/o corners
					if (_cells[i - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols + 1].value === ValueType.bomb) numberOfBombs++;
				} else if (i % cols === 0 && i !== 0 && i !== cellsNo - cols) {
					// first column w/o corners
					if (_cells[i + 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols + 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols + 1].value === ValueType.bomb) numberOfBombs++;
				} else if (i % cols === cols - 1 && i !== cols - 1 && i !== cellsNo - 1) {
					// last column w/o corners
					if (_cells[i - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols - 1].value === ValueType.bomb) numberOfBombs++;
				} else if (i === 0) {
					// top left corner
					if (_cells[i + 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols + 1].value === ValueType.bomb) numberOfBombs++;
				} else if (i === cols - 1) {
					// top right corner
					if (_cells[i - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols - 1].value === ValueType.bomb) numberOfBombs++;
				} else if (i === cellsNo - cols) {
					// bottom left corner
					if (_cells[i + 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols + 1].value === ValueType.bomb) numberOfBombs++;
				} else if (i === cellsNo - 1) {
					// bottom right corner
					if (_cells[i - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols - 1].value === ValueType.bomb) numberOfBombs++;
				} else {
					// rest
					if (_cells[i - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i - cols + 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols - 1].value === ValueType.bomb) numberOfBombs++;
					if (_cells[i + cols + 1].value === ValueType.bomb) numberOfBombs++;
				}
				_cells[i].value = numberOfBombs;
			}
		}

		setCells(_cells);
		setRefresh(false);
		console.log(cells);
	}, [cols, rows, bombs, refresh]);

	return { cells, setCells };
}
