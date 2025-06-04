// src/routes/index.tsx
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { ProductsPage } from "../pages/products";
import { HomePage } from "../pages/home";
import App from "../App";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "produtos", element: <ProductsPage /> },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
