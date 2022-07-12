import {format} from "date-fns";
import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
	{
		Header: "Id",
		accessor: "id",
		Footer: "Id",
		disableFilters: true,
		sticky: "left",
	},
	{
		Header: "First Name",
		accessor: "first_name",
		Footer: "First Name",
		// width: 500,
		sticky: "left",
	},
	{
		Header: "Last Name",
		accessor: "last_name",
		Footer: "Last Name",
		sticky: "left",
	},
	{
		Header: "Date of Birth",
		accessor: "date_of_birth",
		Footer: "Date of Birth",
		Cell: ({value}) => format(new Date(value), "dd/MM/yyyy"), // controls what is rendered in the UI
	},
	{
		Header: "Country",
		accessor: "country",
		Footer: "Country",
	},
	{
		Header: "Phone",
		accessor: "phone",
		Footer: "Phone",
	},

	{
		Header: "Email",
		accessor: "email",
		Footer: "Email",
		width: 300,
	},
	{
		Header: "Age",
		accessor: "age",
		Footer: "Age",
	},
];

export const GROUPED_COLUMNS = [
	{
		Header: "Id",
		accessor: "id",
		Footer: "Id",
	},
	{
		Header: "Name",
		Footer: "Name",
		columns: [
			{
				Header: "First Name",
				accessor: "first_name",
				Footer: "First Name",
			},
			{
				Header: "Last Name",
				accessor: "last_name",
				Footer: "Last Name",
			},
		],
	},
	{
		Header: "Info",
		Footer: "Info",
		columns: [
			{
				Header: "Date of Birth",
				accessor: "date_of_birth",
				Footer: "Date of Birth",
			},
			{
				Header: "Country",
				accessor: "country",
				Footer: "Country",
			},
			{
				Header: "Phone",
				accessor: "phone",
				Footer: "Phone",
			},
		],
	},
];
