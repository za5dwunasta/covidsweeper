import React, { useEffect, useState } from 'react';
import './DisplayData.scss';

type DisplayDataProps = {
	desc: string;
	data: number;
};

const DisplayData: React.FunctionComponent<DisplayDataProps> = ({ desc, data }) => {
	return (
		<div className="display-board">
			<span className="display-board__desc">{desc}</span>
			<div className="display-board__data">
				{data < 0 ? `-${Math.abs(data).toString().padStart(2, '0')}` : data.toString().padStart(3, '0')}
			</div>
		</div>
	);
};

export default DisplayData;
