import React from "react";
import Menu from "../components/Menu/menu";
import styles from "@/styles/Home.module.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Service() {
	return (
		<div className={styles.container}>
			<Menu />
			<div className={styles.main}>
				<h1>Liste des points de retrait</h1>
				<hr />
				<div className={styles.addbutton}>
					<Button variant="contained" color="secondary">
						<AddIcon />
						<span>Ajouter un livre</span>
					</Button>
				</div>
			</div>
		</div>
	);
}
