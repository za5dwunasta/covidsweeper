import { Cell, StatusType, ValueType } from '../hooks/useCells';

export const openCells = (index: number, cells: Cell[], setCells: Function, cols: number, rows: number) => {
	let _cells: Cell[] = [...cells];
	if (cells[index].status === StatusType.flagged || cells[index].status === StatusType.uncover) return;
	if (cells[index].value === ValueType.bomb) {
		_cells.map((cell) => (cell.status = cell.value === ValueType.bomb ? StatusType.uncover : cell.status));
		alert('bomb!');
	}
	if (_cells[index].value !== ValueType.zero) {
		_cells[index].status = StatusType.uncover;
	} else {
		_cells[index].status = StatusType.uncover;
		checkAdjacent(index, _cells, setCells, cols, rows);
	}
	// _cells[index].status = StatusType.uncover;
	setCells(_cells);
};

const checkAdjacent = (i: number, cells: Cell[], setCells: Function, cols: number, rows: number) => {
	const cellsNo = rows * cols;
	if (i > 0 && i < cols - 1) {
		// first row w/o corners
		openCells(i - 1, cells, setCells, cols, rows);
		openCells(i + 1, cells, setCells, cols, rows);
		openCells(i + cols, cells, setCells, cols, rows);
		openCells(i + cols - 1, cells, setCells, cols, rows);
		openCells(i + cols + 1, cells, setCells, cols, rows);
	} else if (i > cellsNo - cols && i < cellsNo - 1) {
		// last row w/o corners
		openCells(i - 1, cells, setCells, cols, rows);
		openCells(i + 1, cells, setCells, cols, rows);
		openCells(i - cols, cells, setCells, cols, rows);
		openCells(i - cols - 1, cells, setCells, cols, rows);
		openCells(i - cols + 1, cells, setCells, cols, rows);
	} else if (i % cols === 0 && i !== 0 && i !== cellsNo - cols) {
		// first column w/o corners
		openCells(i + 1, cells, setCells, cols, rows);
		openCells(i - cols, cells, setCells, cols, rows);
		openCells(i + cols, cells, setCells, cols, rows);
		openCells(i + cols + 1, cells, setCells, cols, rows);
		openCells(i - cols + 1, cells, setCells, cols, rows);
	} else if (i % cols === cols - 1 && i !== cols - 1 && i !== cellsNo - 1) {
		// last column w/o corners
		openCells(i - 1, cells, setCells, cols, rows);
		openCells(i - cols, cells, setCells, cols, rows);
		openCells(i + cols, cells, setCells, cols, rows);
		openCells(i + cols - 1, cells, setCells, cols, rows);
		openCells(i - cols - 1, cells, setCells, cols, rows);
	} else if (i === 0) {
		// top left corner
		openCells(i + 1, cells, setCells, cols, rows);
		openCells(i + cols, cells, setCells, cols, rows);
		openCells(i + cols + 1, cells, setCells, cols, rows);
	} else if (i === cols - 1) {
		// top right corner
		openCells(i - 1, cells, setCells, cols, rows);
		openCells(i + cols, cells, setCells, cols, rows);
		openCells(i + cols - 1, cells, setCells, cols, rows);
	} else if (i === cellsNo - cols) {
		// bottom left corner
		openCells(i + 1, cells, setCells, cols, rows);
		openCells(i - cols, cells, setCells, cols, rows);
		openCells(i - cols - 1, cells, setCells, cols, rows);
	} else if (i === cellsNo - 1) {
		// bottom right corner
		openCells(i - 1, cells, setCells, cols, rows);
		openCells(i - cols, cells, setCells, cols, rows);
		openCells(i - cols - 1, cells, setCells, cols, rows);
	} else {
		// rest
		openCells(i - 1, cells, setCells, cols, rows);
		openCells(i + 1, cells, setCells, cols, rows);
		openCells(i - cols, cells, setCells, cols, rows);
		openCells(i + cols, cells, setCells, cols, rows);
		openCells(i - cols - 1, cells, setCells, cols, rows);
		openCells(i - cols + 1, cells, setCells, cols, rows);
		openCells(i + cols - 1, cells, setCells, cols, rows);
		openCells(i + cols + 1, cells, setCells, cols, rows);
	}
};
