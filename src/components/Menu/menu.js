import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./menu.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function Menu() {
	const router = useRouter();
	const [cookie, setCookie, removeCookie] = useCookies(["user"]);

	function logout() {
		removeCookie("user");
		router.push("/connexion");
	}

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
					<Link href="/point_de_retrait">
						<LocationOnIcon />
						<span>Point de retrait</span>
					</Link>
				</div>
				<div className={styles.submitButton}>
					<Button
						type="submit"
						variant="contained"
						color="secondary"
						onClick={logout}
					>
						<MeetingRoomIcon />
						<span>Déconnection</span>
					</Button>
				</div>
			</div>
		</div>
	);
}
