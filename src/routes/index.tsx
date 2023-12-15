import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Projects } from "../pages/ProjectsPage";
import { Contacts } from "../pages/Contacts";

export const RoutesMain = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contacts />} />
            </Routes>
        </Router>
    );
};
