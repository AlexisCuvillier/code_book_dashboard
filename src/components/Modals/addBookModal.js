import React, { useState } from "react";
import styles from "./addModal.module.css";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddBookModal() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [title, setTitle] = useState();
	const [author, setAuthor] = useState();
	const [available, setAvailable] = useState(true);

	const submitForm = async (event) => {
		event.preventDefault();
		const data = {
			title: title,
			author: author,
			available: available,
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
		console.log(`${response} Livre ${title} de l'auteur ${author}`);
		handleClose();
	};

	return (
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
						Nouveau Livre
					</Typography>
					<TextField
						className={styles.input}
						autoFocus
						required
						margin="dense"
						id="title"
						label="Titre"
						type="text"
						variant="outlined"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
					<TextField
						className={styles.input}
						autoFocus
						required
						margin="dense"
						id="author"
						label="Auteur"
						type="text"
						variant="outlined"
						value={author}
						onChange={(event) => setAuthor(event.target.value)}
					/>
					<Button onClick={submitForm} variant="contained" color="success">
						Enregistrer
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
