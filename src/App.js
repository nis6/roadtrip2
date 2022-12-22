import React from "react";
import Home from "./pages/Home";
import "./utilities.css";
import Planning from './pages/planning';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/plan" element={<Planning />} />
            </Routes>
        </Router>
    )
}
export default App;