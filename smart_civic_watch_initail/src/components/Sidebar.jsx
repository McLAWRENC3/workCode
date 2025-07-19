import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path ? 'bg-gray-700' : '';
  };

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 flex flex-col">
      <div>
        <h2 className="text-xl font-bold mb-6">Smart Civic Admin</h2>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className={`block px-4 py-2 rounded hover:bg-gray-700 transition-colors ${isActive('/')}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/reports" 
              className={`block px-4 py-2 rounded hover:bg-gray-700 transition-colors ${isActive('/reports')}`}
            >
              Reports
            </Link>
          </li>
          <li>
            <Link 
              to="/alerts" 
              className={`block px-4 py-2 rounded hover:bg-gray-700 transition-colors ${isActive('/alerts')}`}
            >
              Alerts
            </Link>
          </li>
          <li>
            <Link 
              to="/rewards" 
              className={`block px-4 py-2 rounded hover:bg-gray-700 transition-colors ${isActive('/rewards')}`}
            >
              Rewards
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout button positioned at the bottom */}
      <div className="mt-auto">
        <button 
          onClick={logout}
          className="w-full text-left px-4 py-2 rounded hover:bg-gray-700 transition-colors flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
            />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;