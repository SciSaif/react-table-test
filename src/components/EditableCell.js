import React, {useState} from "react";
import {Box, TableCell, Table, Button,Typography, Modal} from "@mui/material";
import "./tableCell.css";

const EditableCell = ({cell}) => {
	const [openInci, setOpenInci] = useState(false);

	return (
		<TableCell {...cell.getCellProps()} className="table-cell">
			<span onClick={() => setOpenInci(true)}>{cell.render("Cell")}</span>
			<Modal open={openInci} onClose={() => setOpenInci(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box >
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography>
					<Typography id="modal-modal-description" sx={{mt: 2}}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</Box>
			</Modal>
		</TableCell>
	);
};

export default EditableCell;
