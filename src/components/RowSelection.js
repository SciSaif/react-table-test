import React, {useMemo} from "react";
import {useTable, useRowSelect} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import {COLUMNS} from "./columns";
import "./table.css";
import {Checkbox} from "./Checkbox";

const RowSelection = () => {
	const defaultColumn = React.useMemo(
		() => ({
			minWidth: 330,
			width: 350,
			maxWidth: 400,
		}),
		[]
	);

	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {getTableProps, getTableBodyProps, headerGroups, rows, footerGroups, prepareRow, selectedFlatRows} = useTable(
		{
			columns,
			data,
			defaultColumn,
		},
		useRowSelect,
		(hooks) => {
			hooks.visibleColumns.push((columns) => [
				...columns,
				{
					id: "selection",
					Header: ({getToggleAllRowsSelectedProps}) => <Checkbox {...getToggleAllRowsSelectedProps()} />,
					accessor: "selection",
					Cell: ({row}) => <Checkbox {...row.getToggleRowSelectedProps()} />,
				},
			]);
		}
	);

	const firstPageRows = rows.slice(0, 10);

	return (
		<>
			<table {...getTableProps}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps}>
					{firstPageRows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
								})}
							</tr>
						);
					})}
					<tr>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					{footerGroups.map((footerGroup) => (
						<tr {...footerGroup.getFooterGroupProps()}>
							{footerGroup.headers.map((column) => (
								<td {...column.getFooterProps()}>{column.render("Footer")}</td>
							))}
						</tr>
					))}
				</tfoot>
			</table>
		</>
	);
};

export default RowSelection;
