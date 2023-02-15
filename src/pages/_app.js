import { CookiesProvider } from "react-cookie";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<CookiesProvider>
			<Component {...pageProps} />
		</CookiesProvider>
	);
}
