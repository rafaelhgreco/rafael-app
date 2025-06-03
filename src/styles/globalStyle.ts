import { css } from "@emotion/react";
import theme from "./themes";

const globalStyles = css`
    :root {
        --color-primary: ${theme.palette.primary.main};
        --color-primary-light: ${theme.palette.primary.light};
        --color-primary-dark: ${theme.palette.primary.dark};

        --color-secondary: ${theme.palette.secondary.main};
        --color-secondary-light: ${theme.palette.secondary.light};
        --color-secondary-dark: ${theme.palette.secondary.dark};

        --color-text-primary: ${theme.palette.text.primary};
        --color-text-secondary: ${theme.palette.text.secondary};
        --color-text-white: #ffffff;

        --color-background: ${theme.palette.background.default};
        --color-background-header: ${theme.palette.background.paper};
        --color-paper: ${theme.palette.background.paper};

        --font-family: ${theme.typography.fontFamily};
        --font-size-base: ${theme.typography.fontSize}px;
        --font-size-lg: ${theme.typography.h1.fontSize}px;

        --padding-sm: 10px;
        --padding-md: 12px;
        --padding-xs: 16px;

        --border-radius: 8px;
        --border-radius-sm: 4px;
        --border-radius-lg: 12px;
        --transition-duration: 0.3s;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-family);
        background-color: var(--color-background);
        color: var(--color-text-primary);
        line-height: 1.5;
    }

    button {
        cursor: pointer;
        font-family: var(--font-family);
    }

    a {
        color: var(--color-primary);
        text-decoration: none;
        transition: color var(--transition-duration) ease;

        &:hover {
            color: var(--color-primary-dark);
        }
    }
`;

export default globalStyles;
