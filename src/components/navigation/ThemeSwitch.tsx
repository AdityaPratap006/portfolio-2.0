import { useAppThemeContext } from "../../contexts/AppTheme.context";
import { ThemeMode } from "../../hooks/appTheme.hook";

interface Props {}

export const ThemeSwitch = (_props: Props) => {
    const { state, toggleMode } = useAppThemeContext();

    const isDarkMode = state.mode === ThemeMode.DARK;

    return (
        <div className="flex justify-between items-center gap-1">
            <div
                className={`w-12 h-8 flex items-center ${
                    isDarkMode ? "bg-primary" : "bg-neutral"
                } rounded-full p-1 cursor-pointer`}
                onClick={toggleMode}
            >
                <div
                    className={`bg-neutralBg w-6 h-6 rounded-full shadow-md transform ${
                        isDarkMode && "translate-x-4"
                    } duration-300 ease-in-out`}
                ></div>
            </div>
        </div>
    );
};
