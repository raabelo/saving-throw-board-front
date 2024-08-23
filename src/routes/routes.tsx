import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useEffect } from "react";
import CharacterSelection from "../pages/CharacterSelection";
import TableManager from "../pages/TableManager";

const RoutesManager = () => {
    useEffect(() => {
        if (window.location.pathname.includes("index.html")) {
            redirect("/");
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CharacterSelection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/session" element={<TableManager />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesManager;
