// src/App.tsx - com layout corrigido
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

const AppLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 1366px;
    margin: 0 auto;
`;

const ContentContainer = styled.main`
    flex: 1;
    padding: 20px;
`;

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Global styles={globalStyles} />
            <AppLayout>
                <HashRouter>
                    <Header items={["Inicio", "Sobre"]} />
                    <ContentContainer>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/sobre" element={<AboutPage />} />
                        </Routes>
                    </ContentContainer>
                </HashRouter>
            </AppLayout>
        </ThemeProvider>
    );
};

export default App;
