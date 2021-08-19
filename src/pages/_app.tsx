import type { AppProps } from "next/app";
import { AppLayout } from "../components/layout/AppLayout";
import { AppThemeProvider } from "../contexts/AppTheme.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppThemeProvider>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </AppThemeProvider>
    );
}
export default MyApp;
