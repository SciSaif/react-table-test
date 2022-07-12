import React, {useMemo} from "react";
import {useTable, useBlockLayout} from "react-table";
import {Styles} from "./TableStyles";
import {FixedSizeList} from "react-window";
import {useSticky} from "react-table-sticky";
import scrollbarWidth from "./scrollbarWidth";

import {COLUMNS, GROUPED_COLUMNS} from "./columns";
import "./table.css";
import MOCK_DATA from "./MOCK_DATA.json";
import {
	Box,
	Stack,
	Typography,
	Paper,
	TableBody,
	TableRow,
	TableCell,
	Table,
	TableContainer,
	TableHead,
	Button,
	Checkbox,
	TablePagination,
} from "@mui/material";

function VTable({columns, data}) {
	// Use the state and functions returned from useTable to build your UI

	const defaultColumn = useMemo(
		() => ({
			width: 150,
		}),
		[]
	);

	const scrollBarSize = useMemo(() => scrollbarWidth(), []);

	const {getTableProps, getTableBodyProps, headerGroups, rows, totalColumnsWidth, prepareRow} = useTable(
		{
			columns,
			data,
			defaultColumn,
		},
		useBlockLayout,
		useSticky
	);

	const RenderRow = React.useCallback(
		({index, style}) => {
			const row = rows[index];
			prepareRow(row);
			return (
				<div
					{...row.getRowProps({
						style,
					})}
					className="tr">
					{row.cells.map((cell) => {
						return (
							<div {...cell.getCellProps()} className="td">
								{cell.render("Cell")}
							</div>
						);
					})}
				</div>
			);
		},
		[prepareRow, rows]
	);

	// Render the UI for your table
	return (
		<div {...getTableProps()} className="table sticky">
			<div className="header">
				{headerGroups.map((headerGroup) => (
					<div {...headerGroup.getHeaderGroupProps()} className="tr">
						{headerGroup.headers.map((column) => (
							<div {...column.getHeaderProps()} className="th">
								{column.render("Header")}
							</div>
						))}
					</div>
				))}
			</div>

			<div {...getTableBodyProps()} className="body">
				<FixedSizeList height={400} itemCount={rows.length} itemSize={35} width={totalColumnsWidth + scrollBarSize}>
					{RenderRow}
				</FixedSizeList>
			</div>
		</div>
	);
}

function VirtualizedTable() {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	return (
		<div style={{width: "70%", backgroundColor: "red", overflowX: "auto"}}>
			<Styles>
				<VTable columns={columns} data={data} />
			</Styles>
		</div>
	);
}

export default VirtualizedTable;
