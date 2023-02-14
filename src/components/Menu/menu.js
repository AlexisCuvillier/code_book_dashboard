import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./menu.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

export default function Menu() {
	return (
		<div className={styles.container}>
			<div>
				<a href="/">
					<Image
						src="/image/CodeBook.png"
						alt="CodeBook Logo"
						width={300}
						height={300}
						priority
					/>
				</a>
			</div>
			<div className={styles.nav}>
				<div className={styles.navitem}>
					<Link href="/books">
						<MenuBookIcon />
						<span>Livre</span>
					</Link>
				</div>
				<div className={styles.navitem}>
					<Link href="/services">
						<LocationOnIcon />
						<span>Point de retrait</span>
					</Link>
				</div>
				<div className={styles.navitem}>
					<Link href="/connexion">
						<Button variant="contained" color="secondary">
							<MeetingRoomIcon />
							<span>Déconnection</span>
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
