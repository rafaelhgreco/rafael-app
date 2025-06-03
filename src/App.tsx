import { ThemeProvider } from "styled-components";
import theme from "../src/styles/themes";
import CssBaseline from "@mui/material/CssBaseline";
import globalStyles from "../src/styles/globalStyle";
import { Global } from "@emotion/react";
import Header from "./components/molecules/header";
import UserList from "./components/user_list";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Global styles={globalStyles} />
            <div>
                <Header items={["Ínicio", "Sobre", "Contatos"]} />
            </div>
            <div style={{ padding: "20px" }}>
                <UserList />
            </div>
        </ThemeProvider>
    );
};

export default App;
