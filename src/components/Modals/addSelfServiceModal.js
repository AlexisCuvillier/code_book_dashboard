import React, { useState } from "react";
import styles from "./addModal.module.css";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddSelfServiceModal() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [location, setLocation] = useState();
	const [address, setAddress] = useState();
	const [zipCode, setZipCode] = useState();

	const submitForm = async (event) => {
		event.preventDefault();
		const data = {
			location: location,
			address: address,
			zip_code: zipCode,
		};
		const JSONdata = JSON.stringify(data);
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSONdata,
		};
		const url = `${process.env.API}/api/book`;
		const response = await fetch(url, options);
		console.log(`${response} Livre ${location} de l'auteur ${address}`);
		handleClose();
	};

	return (
		<div className={styles.addbutton}>
			<Button onClick={handleOpen} variant="contained" color="secondary">
				<AddIcon />
				<span>Ajouter un Point de Retrait</span>
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className={styles.modal}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Nouveau Point de retrait
					</Typography>
					<TextField
						className={styles.input}
						autoFocus
						required
						margin="dense"
						id="location"
						label="Titre"
						type="text"
						variant="outlined"
						value={location}
						onChange={(event) => setLocation(event.target.value)}
					/>
					<TextField
						className={styles.input}
						autoFocus
						required
						margin="dense"
						id="address"
						label="Adresse"
						type="text"
						variant="outlined"
						value={address}
						onChange={(event) => setAddress(event.target.value)}
					/>
					<TextField
						className={styles.input}
						autoFocus
						required
						margin="dense"
						id="zipCode"
						label="Code Postal"
						type="text"
						variant="outlined"
						value={zipCode}
						onChange={(event) => setZipCode(event.target.value)}
					/>
					<Button onClick={submitForm} variant="contained" color="success">
						Enregistrer
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
