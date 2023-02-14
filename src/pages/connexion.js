import Typography from "@mui/material/Typography";
import CssBaseline from '@mui/material/CssBaseline';
import { TextField, FormControlLabel, Checkbox, Button, Paper, Grid, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";

const theme = createTheme();

export default function connexion() {
	async function login(e) {
		e.preventDefault();
		console.log("connexion");
		const donne = await axios.post(`${process.env.api}api/auth/login`, {
			email: "",
			password: "",
		});

		console.log(donne.data);
	}

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: "100vh" }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage:
							'url("./image/reading-book-sunny-park.jpg")',
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
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Mot de passe"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Se souvenir de moi"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								onClick={login}
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
