import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/menu";
import styles from "@/styles/Home.module.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";


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
import AddSelfServiceModal from "@/components/Modals/addSelfServiceModal";


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

function createData(_id, location, address, zip_code, state) {
	return { _id, location, address, zip_code, state};
}

export default function Service() {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		async function fetchSelfservice() {
			try {
				console.log();
				const response = await fetch(`${process.env.API}/api/selfService`);
				const data = await response.json();
				makeRows(data.result);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		}

		function makeRows(selfServices) {
			const rows = selfServices.map((selfService) => {
				const state = (
					<div>
						<Link href={`/books/edit/${selfService._id}`} className={styles.edit}>
							<EditIcon />
						</Link>
						<Link href={`/books/remove/${selfService._id}`} className={styles.remove}>
							<DeleteOutlineIcon />
						</Link>
					</div>
				);
				return createData(selfService._id, selfService.location, selfService.address, selfService.zip_code, state);
			});
			setRows(rows);
		}

		fetchSelfservice();
	}, []);

	return (
		<div className={styles.container}>
			<Menu />
			<div className={styles.main}>
				<h1>Liste des points de retrait</h1>
				<hr />
				<AddSelfServiceModal />

				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Id</StyledTableCell>
								<StyledTableCell>Location</StyledTableCell>
								<StyledTableCell>Adresse</StyledTableCell>
								<StyledTableCell align="center">Code Postal</StyledTableCell>
								<StyledTableCell></StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<StyledTableRow key={row._id}>
									<StyledTableCell component="th" scope="row">{row._id}</StyledTableCell>
									<StyledTableCell>{row.location}</StyledTableCell>
									<StyledTableCell>{row.address}</StyledTableCell>
									<StyledTableCell align="center">{row.zip_code}</StyledTableCell>
									<StyledTableCell align="center">{row.state}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
