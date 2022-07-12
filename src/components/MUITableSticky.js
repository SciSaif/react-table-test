import React, {useMemo} from "react";
import {useTable, useBlockLayout} from "react-table";
import {useSticky} from "react-table-sticky";
import {Styles} from "./TableStyles";
import MOCK_DATA from "./MOCK_DATA.json";
import {COLUMNS, GROUPED_COLUMNS} from "./columns";
import "./table.css";
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
import EditableCell from "./EditableCell";

export const styles = {
	butCont: {
		justifyContent: "flex-end",
	},
	root: {
		width: "100%",
		overflowX: "auto",
		marginTop: "10px",
	},
	table: {
		minWidth: 650,
		"& .MuiTableCell-root": {
			padding: "8px 12px",
			// width: "250px",
			whiteSpace: "nowrap",
		},
		borderCollapse: "separate",
		borderSpacing: "0px 4px",
	},

	tableCell: {
		width: 130,
		height: 40,
	},
	input: {
		width: 130,
		height: 40,
		fontSize: "14px",
		fontWeight: "400",
	},
	iconBtn: {
		width: "19px",
		height: "19px",
	},
	searchField: {
		width: "50%",
	},
	iconExStock: {
		width: "25px",
	},
	stickyCol: {
		position: "sticky",
		left: 0,
		top: 0,
		background: "rgb(254 245 255)",
		"& .MuiTableCell-root": {
			wordBreak: "break-all !important",
			whiteSpace: "break-spaces !important",
			maxWidth: "150px",
		},
	},
	stickyBg: {
		background: "rgb(254 245 255)",
		borderBottom: "none",
		minWidth: "100px",
	},
	stickyBgOld: {
		background: "rgb(255 223 223)",
		borderBottom: "none",
		minWidth: "100px",
	},
	whiteBg: {
		background: "#fff",
	},
	selectTableCell: {
		width: "50px !important",
	},

	visuallyHidden: {
		border: 0,
		clip: "rect(0 0 0 0)",
		height: 1,
		margin: -1,
		overflow: "hidden",
		padding: 0,
		position: "absolute",
		top: 20,
		width: 1,
	},
};

const MUITableSticky = () => {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {getTableProps, getTableBodyProps, headerGroups, rows, footerGroups, prepareRow} = useTable(
		{
			columns,
			data,
		},
		useBlockLayout,
		useSticky
	);

	const firstPageRows = rows.slice(0, 20);

	return (
		// <TableContainer sx={{maxHeight: 640}} component={Paper} className="table-wrapper">
		<div style={{width: "50%", backgroundColor: "red", overflowX: "auto"}}>
			<Styles>
				<Table {...getTableProps()} className="table sticky">
					<TableHead className="header">
						{headerGroups.map((headerGroup) => (
							<TableRow {...headerGroup.getHeaderGroupProps()} className="tr">
								{headerGroup.headers.map((column) => (
									<TableCell {...column.getHeaderProps()} className="th">
										{column.render("Header")}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableHead>
					<TableBody {...getTableBodyProps()} className="body">
						{firstPageRows.map((row) => {
							prepareRow(row);
							return (
								<TableRow {...row.getRowProps()} className="tr">
									{row.cells.map((cell) => (
										<TableCell {...cell.getCellProps()} className="td">
											{cell.render("Cell")}
										</TableCell>
									))}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Styles>
		</div>
		// </TableContainer>
	);
};

export default MUITableSticky;
