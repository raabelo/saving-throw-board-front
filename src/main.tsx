// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import CharProvider from "./contexts/CharContext.tsx";
import ModalProvider from "./contexts/ModalContext.tsx";
import SessionProvider from "./contexts/SessionContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <CharProvider>
        <SessionProvider>
            <ModalProvider>
                <App />
            </ModalProvider>
        </SessionProvider>
    </CharProvider>
    // </React.StrictMode>
);
