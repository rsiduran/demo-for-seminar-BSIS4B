import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './auth/login';
import Dashboard from './pages/dashboard';


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]); // Add an empty dependency array to ensure this runs only once

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}