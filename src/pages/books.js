import React from "react";
import Menu from "../components/Menu/menu";
import styles from "@/styles/Home.module.css";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function submitForm() {
	console.log("submit OK");
}

export default function Books() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className={styles.container}>
			<Menu />
			<div className={styles.main}>
				<h1>Liste des livres</h1>
				<hr />
				<div className={styles.addbutton}>
					<Button onClick={handleOpen} variant="contained" color="secondary">
						<AddIcon />
						<span>Ajouter un livre</span>
					</Button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box className={styles.modal}>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								Ajouter
							</Typography>
							<TextField
								className={styles.input}
								autoFocus
								margin="dense"
								id="title"
								label="Titre"
								type="title"
								variant="outlined"
							/>
							<TextField
								className={styles.input}
								autoFocus
								margin="dense"
								id="author"
								label="Auteur"
								type="author"
								variant="outlined"
							/>
							<Button onClick={handleOpen} variant="contained" color="success">
								Enregistrer
							</Button>
						</Box>
					</Modal>
				</div>

				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Dessert (100g serving)</StyledTableCell>
								<StyledTableCell align="right">Calories</StyledTableCell>
								<StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
								<StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
								<StyledTableCell align="right">
									Protein&nbsp;(g)
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<StyledTableRow key={row.name}>
									<StyledTableCell component="th" scope="row">
										{row.name}
									</StyledTableCell>
									<StyledTableCell align="right">
										{row.calories}
									</StyledTableCell>
									<StyledTableCell align="right">{row.fat}</StyledTableCell>
									<StyledTableCell align="right">{row.carbs}</StyledTableCell>
									<StyledTableCell align="right">{row.protein}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
