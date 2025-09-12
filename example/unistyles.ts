import { StyleSheet } from 'react-native-unistyles';

const theme = {
    colors: {
        primary: '#6200ee',
        secondary: '#03dac6',
        background: 'red',
        surface: '#dddddd',
    },
    spacing: {
        none: 0,
        xs: 4,
        sm: 8,
        md: 16,
    },
    radius: {
        none: 0,
        sm: 4,
        md: 8,
        lg: 16,
    },
    size: {
        none: 0,
        xs: 16,
        sm: 32,
        md: 64,
        lg: 128,
    },
};

const appThemes = {
    light: theme,
    dark: theme,
};

const breakpoints = {
    xs: 0,
    sm: 300,
    md: 500,
    lg: 800,
    xl: 1200,
};

StyleSheet.configure({
    themes: appThemes,
    breakpoints,
    settings: {
        initialTheme: 'light',
    },
});

type AppThemes = typeof appThemes;
type AppBreakpoints = typeof breakpoints;

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes {}
    export interface UnistylesBreakpoints extends AppBreakpoints {}
}
