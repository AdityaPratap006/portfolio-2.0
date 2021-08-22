import type { AppProps } from "next/app";
import Router from "next/router";
import { useEffect } from "react";
import { AppLayout } from "../components/layout/AppLayout";
import { AppThemeProvider } from "../contexts/AppTheme.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        Router.events.on("routeChangeComplete", () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
    }, []);

    return (
        <AppThemeProvider>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </AppThemeProvider>
    );
}
export default MyApp;
