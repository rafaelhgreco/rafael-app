// src/routes/index.tsx
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { AboutPage } from "../pages/about";
import { HomePage } from "../pages/home";
import App from "../App";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "sobre", element: <AboutPage /> },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
