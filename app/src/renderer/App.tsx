import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import './style/dashboard.css';
import Dashboard from './components/Dashboard';
import ClientManager from './components/ClientManager';
import Navbar from './components/ui/Navbar';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<ClientManager />} />
      </Routes>
    </Router>
  );
}
