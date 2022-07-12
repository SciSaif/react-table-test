import BasicTable from "./components/BasicTable";
import ColumnOrder from "./components/ColumnOrder";
import FilteringTable from "./components/FilteringTable";
import PaginationTable from "./components/PaginationTable";
import RowSelection from "./components/RowSelection";
import SortingTable from "./components/SortingTable";
import MUITable from "./components/MUITable";
import StickyTable from "./components/StickyTable";
import MUITableSticky from "./components/MUITableSticky";
import VirtualizedTable from "./components/VirtualizedTable";

// @TODO
// 3. try to make virtualized table with MUI

function App() {
	return (
		<div>
			{/* <BasicTable /> */}
			{/* <SortingTable /> */}
			{/* <FilteringTable /> */}
			{/* <PaginationTable /> */}
			{/* <RowSelection /> */}
			{/* <ColumnOrder /> */}
			{/* <MUITable /> */}
			{/* <StickyTable /> */}
			{/* <MUITableSticky /> */}
			<VirtualizedTable />
		</div>
	);
}

export default App;
