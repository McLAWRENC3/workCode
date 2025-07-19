import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Alerts from './pages/Alerts';
import Rewards from './pages/Rewards';
import './index.css'; // or './App.css' — whichever has Tailwind setup


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Uncomment the route you want to test */}
          { <Route path="/login" element={<Login />} /> }
          <Route path="/" element={<Dashboard />} /> {/* Remove ProtectedRoute */}
          {/* <Route path="/reports" element={<Reports />} /> */}
          {/* <Route path="/alerts" element={<Alerts />} /> */}
          {/* <Route path="/rewards" element={<Rewards />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;