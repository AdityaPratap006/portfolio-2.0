import { createContext, PropsWithChildren, useContext } from "react";
import {
    AppThemeState,
    INITIAL_VALUE as INITIAL_THEME_STATE,
    ThemeMode,
    useAppTheme,
} from "../hooks/appTheme.hook";

interface AppThemeContextValue {
    state: AppThemeState;
    setMode: (_mode: ThemeMode) => void;
    toggleMode: () => void;
}

const AppThemeContext = createContext<AppThemeContextValue>({
    state: INITIAL_THEME_STATE,
    setMode: () => null,
    toggleMode: () => null,
});

export const AppThemeProvider = ({ children }: PropsWithChildren<{}>) => {
    const { state, setMode, toggleMode } = useAppTheme();

    return (
        <AppThemeContext.Provider
            value={{
                state,
                setMode,
                toggleMode,
            }}
        >
            {children}
        </AppThemeContext.Provider>
    );
};

export const useAppThemeContext = () => {
    return useContext(AppThemeContext);
};
