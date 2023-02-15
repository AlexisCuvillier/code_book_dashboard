import React, { useEffect, useState } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddBookModal from "@/components/Modals/addBookModal";

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

function createData(titre, auteur, disponible, etat) {
	return { titre, auteur, disponible, etat };
}
export default function Books() {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		async function fetchBooks() {
			try {
				console.log();
				const response = await fetch(`${process.env.API}/api/book`);
				const data = await response.json();
				makeRows(data.result);
			} catch (error) {
				console.error(error);
			}
		}

		function makeRows(books) {
			const rows = books.map((book) => {
				const availableSign = book.available ? "🟢" : "🔴";
				const state = (
					<div>
						<EditIcon />
						<DeleteOutlineIcon />
					</div>
				);
				return createData(book.title, book.author, availableSign, state);
			});
			setRows(rows);
		}

		fetchBooks();
	}, []);

	return (
		<div className={styles.container}>
			<Menu />
			<div className={styles.main}>
				<h1>Liste des livres</h1>
				<hr />
				<AddBookModal />
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Titre</StyledTableCell>
								<StyledTableCell align="right">Auteur</StyledTableCell>
								<StyledTableCell align="center">Disponible</StyledTableCell>
								<StyledTableCell align="center">Etat</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<StyledTableRow key={row.titre}>
									<StyledTableCell component="th" scope="row">
										{row.titre}
									</StyledTableCell>
									<StyledTableCell align="right">{row.auteur}</StyledTableCell>
									<StyledTableCell align="center">
										{row.disponible}
									</StyledTableCell>
									<StyledTableCell align="center">{row.etat}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
