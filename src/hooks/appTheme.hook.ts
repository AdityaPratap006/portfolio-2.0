import { useEffect, useReducer } from "react";

export enum ThemeMode {
    LIGHT = "light",
    DARK = "dark",
}

export interface AppThemeState {
    mode: ThemeMode;
}

const getLocalThemeMode = () => {
    if (process.browser) {
        return window.localStorage.getItem("theme_mode") as ThemeMode;
    }
    return ThemeMode.LIGHT;
};
const setLocalThemeMode = (mode: ThemeMode) => {
    if (process.browser) {
        window.localStorage.setItem("theme_mode", mode);
    }
};

const getDefaultUserPreferredThemeMode = () =>
    window.matchMedia(`(prefers-color-scheme: dark)`).matches
        ? ThemeMode.DARK
        : ThemeMode.LIGHT;

export const INITIAL_VALUE: AppThemeState = {
    mode: ThemeMode.LIGHT,
};

enum ThemeActionType {
    SET_MODE = "SET_MODE",
}

interface SetModeAction {
    type: ThemeActionType.SET_MODE;
    payload: ThemeMode;
}

type ThemeAction = SetModeAction;

const themeReducer = (
    state: AppThemeState = INITIAL_VALUE,
    action: ThemeAction
): AppThemeState => {
    switch (action.type) {
        case ThemeActionType.SET_MODE:
            return {
                ...state,
                mode: action.payload,
            };
        default:
            return state;
    }
};

export const useAppTheme = () => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_VALUE);

    const { mode } = state;

    useEffect(() => {
        const initialThemeMode =
            getLocalThemeMode() || getDefaultUserPreferredThemeMode();
        setMode(initialThemeMode);
    }, []);

    useEffect(() => {
        setLocalThemeMode(mode);
    }, [mode]);

    const setMode = (mode: ThemeMode) => {
        dispatch({
            type: ThemeActionType.SET_MODE,
            payload: mode,
        });
    };

    const toggleMode = () => {
        if (state.mode === ThemeMode.DARK) {
            setMode(ThemeMode.LIGHT);
        } else {
            setMode(ThemeMode.DARK);
        }
    };

    return { state, setMode, toggleMode };
};
