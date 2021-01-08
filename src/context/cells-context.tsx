import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useCells } from '../hooks/useCells';
import { Cell } from '../hooks/useCells';

interface ICells {
	rows: number;
	cols: number;
	bombs: number;
	bombsDisplay: number;

	cells: Cell[];
	live: boolean;
	refresh: boolean;
	time: number;
	setCells: (cells: Cell[]) => void;
	setLive: (live: boolean) => void;
	setRows: (rows: number) => void;
	setCols: (cols: number) => void;
	setBombs: (cols: number) => void;
	setRefresh: (refresh: boolean) => void;
	setTime: (time: number) => void;
	setBombsDisplay: (bombsDisplay: number) => void;
}

const ICellsValue: ICells = {
	rows: 9,
	cols: 9,
	bombs: 10,
	bombsDisplay: 10,
	cells: [],
	live: false,
	refresh: true,
	time: 0,
	setCells: () => {},
	setLive: () => {},
	setRows: () => {},
	setCols: () => {},
	setBombs: () => {},
	setRefresh: () => {},
	setTime: () => {},
	setBombsDisplay: () => {},
};

export type Props = {
	children?: ReactNode;
};

export const CellsContext = createContext<ICells>(ICellsValue);
export const CellsProvider = ({ children }: { children: React.ReactNode }) => {
	const [rows, setRows] = useState(9);
	const [cols, setCols] = useState(9);
	const [bombs, setBombs] = useState<number>(10);
	const [bombsDisplay, setBombsDisplay] = useState<number>(10);

	const [time, setTime] = useState<number>(0);

	const [live, setLive] = useState(true);
	const [refresh, setRefresh] = useState(true);
	const { cells, setCells } = useCells(rows, cols, bombs, setRefresh, refresh, setBombsDisplay);

	return (
		<CellsContext.Provider
			value={{
				rows,
				cols,
				bombs,
				cells,
				live,
				refresh,
				time,
				bombsDisplay,
				setLive,
				setCells,
				setRows,
				setCols,
				setBombs,
				setRefresh,
				setTime,
				setBombsDisplay,
			}}
		>
			{children}
		</CellsContext.Provider>
	);
};
export const useCellsValue = () => useContext(CellsContext);
