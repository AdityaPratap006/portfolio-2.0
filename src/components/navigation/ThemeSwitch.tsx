import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useAppThemeContext } from "../../contexts/AppTheme.context";
import { ThemeMode } from "../../hooks/appTheme.hook";

interface Props {}

export const ThemeSwitch = (_props: Props) => {
    const { state, toggleMode } = useAppThemeContext();

    const isDarkMode = state.mode === ThemeMode.DARK;

    return (
        <div className="flex justify-between items-center gap-2">
            <div
                className={`w-10 h-6 sm:w-12 sm:h-8 flex items-center ${
                    isDarkMode ? "bg-primary" : "bg-neutral"
                } rounded-full p-1 cursor-pointer`}
                onClick={toggleMode}
            >
                <div
                    className={`bg-neutralBg w-4 h-4 sm:w-6 sm:h-6 rounded-full shadow-md transform ${
                        isDarkMode && "translate-x-4"
                    } duration-300 ease-in-out`}
                />
            </div>
            <div className="flex justify-center items-center">
                {isDarkMode ? (
                    <MoonIcon className="h-6 sm:h-8 text-onNeutralBg" />
                ) : (
                    <SunIcon className="h-7 sm:h-9 text-yellow-500" />
                )}
            </div>
        </div>
    );
};
