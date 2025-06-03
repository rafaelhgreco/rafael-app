import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
    }

    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }

    interface Palette {
        neutral: Palette["primary"];
    }

    interface PaletteOptions {
        neutral?: PaletteOptions["primary"];
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#556cd6",
            light: "#757de8",
            dark: "#002884",
            contrastText: "#fff",
        },
        secondary: {
            main: "#19857b",
            light: "#4ebaaa",
            dark: "#00574b",
            contrastText: "#fff",
        },
        neutral: {
            main: "#64748B",
            light: "#94A3B8",
            dark: "#334155",
            contrastText: "#fff",
        },
        background: {
            default: "#f5f5f5",
            paper: "#ffffff",
        },
        text: {
            primary: "#1A2027",
            secondary: "#637381",
        },
    },
    typography: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        h1: {
            fontWeight: 700,
            fontSize: "2.5rem",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2rem",
        },
    },
    status: {
        danger: "#e53e3e",
    },
});

export default theme;
