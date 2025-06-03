// src/main.tsx ou src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

async function startApp() {
    if (import.meta.env.MODE === "development") {
        const { worker } = await import("./mocks/browser");

        // Iniciar o MSW com opções adicionais para melhor debug
        await worker.start({
            onUnhandledRequest: "warn",
            serviceWorker: {
                url: "/mockServiceWorker.js",
            },
        });

        console.log("MSW worker started");
    }

    ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

startApp();
