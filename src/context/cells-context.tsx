import React, { createContext, useContext, useState } from 'react';
import { useCells } from '../hooks/useCells';
import { Cell } from '../hooks/useCells';

interface ICell {
	rows: number;
	cols?: number;
	bombs?: number;
	cells?: Cell[];
	setCells?: (cells: Cell[]) => void;
	live?: boolean;
	setLive?: (live: any) => void;
}

export const CellsContext = createContext<ICell>({ rows: 9 });
export const CellsProvider = ({ children }) => {
	const rows = 15;
	const cols = 15;
	const bombs = 20;
	const [live, setLive] = useState();
	const { cells, setCells } = useCells(rows, cols, bombs);

	return (
		<CellsContext.Provider
			value={{
				rows,
				cols,
				bombs,
				cells,
				setCells,
				live,
				setLive,
			}}
		>
			{children}
		</CellsContext.Provider>
	);
};
export const useLaunchesValue = () => useContext(CellsContext);
