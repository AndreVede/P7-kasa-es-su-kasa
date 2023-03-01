import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/404';
import APropos from './pages/A_Propos';
import FicheLogement from './pages/Fiche_Logement';
import Home from './pages/Home';
import Layout from './pages/Layout';

const Rooter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/A_Propos" element={<APropos />} />
                    <Route
                        path="/Fiche_Logement/:idLocation"
                        element={<FicheLogement />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Rooter;
