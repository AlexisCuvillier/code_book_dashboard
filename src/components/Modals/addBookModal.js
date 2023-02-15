import React, { useState } from "react";
import styles from "./addBookModal.module.css"

import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddBookModal() {
    const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

    function submitForm() {
		console.log("ok");
        handleClose();
	}

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
					<Button onClick={submitForm} variant="contained" color="success">
						Enregistrer
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
