import React, {useMemo} from "react";
import {useTable} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import {COLUMNS, GROUPED_COLUMNS} from "./columns";
import {Box, Stack, Typography, Paper, TableBody, TableRow, TableCell, Table, TableContainer, TableHead, Button, Checkbox} from "@mui/material";
import EditableCell from "./EditableCell";

// import "./table.css";

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

const MUITable = () => {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {getTableProps, getTableBodyProps, headerGroups, rows, footerGroups, prepareRow} = useTable({
		columns,
		data,
	});

	return (
		<TableContainer sx={{maxHeight: 640}} component={Paper} className="table-wrapper">
			<Table {...getTableProps} stickyHeader sx={styles.table}>
				<TableHead>
					{headerGroups.map((headerGroup) => (
						<TableRow {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<TableCell {...column.getHeaderProps()} sx={styles.whiteBg}>
									{column.render("Header")}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableHead>
				<TableBody {...getTableBodyProps}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<TableRow {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <EditableCell cell={cell} />;
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MUITable;
