import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import {
	TextField,
	Paper,
	Grid,
	Box,
	Typography,
	Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import Menu from "@/components/Menu/menu";

const theme = createTheme();

export default function Connexion() {
	const [cookie, setCookie, removeCookie] = useCookies(["user"]);
	const router = useRouter();
	const [name, setname] = useState("Brigitte");
	const [code, setCode] = useState("JI34NF32");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	
	if(cookie) {
		<Menu removeCookie={removeCookie} />
	}

	useEffect(() => {
		if (cookie.user) {
			router.push("/");
		}
	}, [cookie, router]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError(null);
		const url = `${process.env.API}/api/login`;
		fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, code }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.message === "Logged In") {
					setCookie("user", name, {
						path: "/",
						maxAge: 3600, // Expires after 1hr
						sameSite: true,
					});
					router.push("/");
				} else {
					setError("name ou mot de passe incorrect");
				}
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setError("Une erreur s'est produite, veuillez réessayer plus tard");
				setIsLoading(false);
				return error;
			});
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: "100vh" }}>
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: 'url("./image/reading-book-sunny-park.jpg")',
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Image
							src="/image/CodeBook.png"
							alt="CodeBook logo"
							width={300}
							height={300}
						/>
						<Typography component="h1" variant="h5">
							<bold>Connexion</bold>
						</Typography>
						<Box component="form" noValidate sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="name"
								label="Nom"
								name="name"
								autoComplete="name"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="code"
								label="Code"
								type="code"
								id="code"
								autoComplete="current-code"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								onClick={handleSubmit}
							>
								Connexion
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
