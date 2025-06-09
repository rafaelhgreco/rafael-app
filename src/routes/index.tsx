// src/routes/index.tsx
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { ProductsPage } from "../pages/products";
import { HomePage } from "../pages/home";
import { FAQPage } from "../pages/faq";
import App from "../App";
import TablePage from "../components/organims/table";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "produtos", element: <ProductsPage /> },
            { path: "faq", element: <FAQPage /> },
            { path: "table", element: <TablePage /> },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
