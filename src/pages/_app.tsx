import type { AppProps } from "next/app";
import { Appbar } from "../components/navigation/Appbar";
import { Sidebar } from "../components/navigation/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="app-container theme-light w-screen min-h-screen">
            <div className="w-screen min-h-screen flex flex-col justify-start items-center">
                <Sidebar />
                <main className=" relative content-container w-screen min-h-screen flex flex-col justify-start items-center sm:ml-20 lg:w-5/6 md:ml-auto">
                    <Appbar />
                    <Component {...pageProps} />
                </main>
            </div>
        </div>
    );
}
export default MyApp;
