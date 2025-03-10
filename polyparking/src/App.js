import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// import pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LotsPage from "./pages/LotsPage";
import ReserveSpotPage from "./pages/ReserveSpotPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import DirectionsPage from "./pages/DirectionsPage";
import SettingsPage from "./pages/SettingsPage";
import ReservationsPage from "./pages/ReservationsPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/lots" element={<LotsPage />} />
          <Route path="/reserve/:lotId" element={<ReserveSpotPage />} />
          <Route
            path="/confirmation/:lotId/:spotId"
            element={<ConfirmationPage />}
          />
          <Route path="/directions" element={<DirectionsPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route
            path="/reserve-spot"
            element={<Navigate to="/lots" replace />}
          />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
