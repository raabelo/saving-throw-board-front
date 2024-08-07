import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useEffect } from "react";

const RoutesWrapper = () => {
    useEffect(() => {
        if (window.location.pathname.includes("index.html")) {
            redirect("/");
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesWrapper;
