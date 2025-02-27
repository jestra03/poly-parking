import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import pages
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LotsPage from './pages/LotsPage';
import ReserveSpotPage from './pages/ReserveSpotPage';
import ConfirmationPage from './pages/ConfirmationPage';
import DirectionsPage from './pages/DirectionsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/lots" element={<LotsPage />} />
          <Route path="/reserve/:lotId" element={<ReserveSpotPage />} />
          <Route path="/confirmation/:lotId/:spotId" element={<ConfirmationPage />} />
          <Route path="/directions" element={<DirectionsPage />} />
          <Route path="/reservations" element={<Navigate to="/lots" replace />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
  );
}

export default App;