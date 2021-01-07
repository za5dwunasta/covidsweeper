import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useCells } from '../hooks/useCells';
import { Cell } from '../hooks/useCells';

interface ICells {
	rows: number;
	cols: number;
	bombs: number;
	cells: Cell[];
	live: boolean;
	refresh: boolean;
	setCells: (cells: Cell[]) => void;
	setLive: (live: boolean) => void;
	setRows: (rows: number) => void;
	setCols: (cols: number) => void;
	setBombs: (cols: number) => void;
	setRefresh: (refresh: boolean) => void;
}

const ICellsValue: ICells = {
	rows: 9,
	cols: 9,
	bombs: 10,
	cells: [],
	live: false,
	refresh: true,
	setCells: () => {},
	setLive: () => {},
	setRows: () => {},
	setCols: () => {},
	setBombs: () => {},
	setRefresh: () => {},
};

export type Props = {
	children?: ReactNode;
};

export const CellsContext = createContext<ICells>(ICellsValue);
export const CellsProvider = ({ children }: { children: React.ReactNode }) => {
	const [rows, setRows] = useState(9);
	const [cols, setCols] = useState(9);
	const [bombs, setBombs] = useState(10);

	const [live, setLive] = useState(true);
	const [refresh, setRefresh] = useState(true);
	const { cells, setCells } = useCells(rows, cols, bombs, setRefresh, refresh);
	console.log('context ' + cells);
	return (
		<CellsContext.Provider
			value={{
				rows,
				cols,
				bombs,
				cells,
				live,
				refresh,
				setLive,
				setCells,
				setRows,
				setCols,
				setBombs,
				setRefresh,
			}}
		>
			{children}
		</CellsContext.Provider>
	);
};
export const useCellsValue = () => useContext(CellsContext);
