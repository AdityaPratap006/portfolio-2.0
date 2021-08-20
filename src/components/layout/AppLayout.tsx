import { FC } from "react";
import { useAppThemeContext } from "../../contexts/AppTheme.context";
import { ThemeMode } from "../../hooks/appTheme.hook";
import { Appbar } from "../navigation/Appbar";
import { Sidebar } from "../navigation/Sidebar";

interface Props {}

export const AppLayout: FC<Props> = ({ children }) => {
    const appTheme = useAppThemeContext();

    const themeClass =
        appTheme.state.mode === ThemeMode.DARK ? "theme-dark" : "theme-light";
    return (
        <div
            className={`app-container w-screen min-h-screen ${themeClass} transition-all duration-300 ease-in-out`}
        >
            <div className="w-screen min-h-screen flex flex-col justify-start items-center">
                <Sidebar />
                <div className=" relative content-container w-screen min-h-screen flex flex-col justify-start items-center sm:ml-20 lg:ml-60 ">
                    <Appbar />
                    <main className="absolute top-0 w-full">{children}</main>
                </div>
            </div>
        </div>
    );
};
