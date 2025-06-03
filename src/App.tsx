import Header from "./components/molecules/header";
import { Route, Routes, HashRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes";
import CssBaseline from "@mui/material/CssBaseline";
import globalStyles from "./styles/globalStyle";
import { Global } from "@emotion/react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    line-height: 1.5;
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
`;

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Global styles={globalStyles} />
            <Container>
                <HashRouter>
                    <Header items={["Inicio", "Sobre"]} />
                    <div>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/sobre" element={<AboutPage />} />
                        </Routes>
                    </div>
                </HashRouter>
            </Container>
        </ThemeProvider>
    );
};

export default App;
