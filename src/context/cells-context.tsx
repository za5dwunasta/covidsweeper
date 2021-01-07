import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useCells } from '../hooks/useCells';
import { Cell } from '../hooks/useCells';

interface ICells {
	rows: number;
	cols: number;
	bombs: number;
	cells: Cell[];
	live: boolean;
	setCells: (cells: Cell[]) => void;
	setLive: (live: boolean) => void;
}

const ICellsValue: ICells = {
	rows: 9,
	cols: 9,
	bombs: 10,
	cells: [],
	live: false,
	setCells: () => {},
	setLive: () => {},
};

export type Props = {
	children?: ReactNode;
};

export const CellsContext = createContext<ICells>(ICellsValue);
export const CellsProvider = ({ children }: { children: React.ReactNode }) => {
	const rows = 15;
	const cols = 15;
	const bombs = 20;
	const [live, setLive] = useState(true);
	const { cells, setCells } = useCells(rows, cols, bombs);
	console.log('context ' + cells);
	return (
		<CellsContext.Provider
			value={{
				rows,
				cols,
				bombs,
				cells,
				live,
				setLive,
				setCells,
			}}
		>
			{children}
		</CellsContext.Provider>
	);
};
export const useCellsValue = () => useContext(CellsContext);
