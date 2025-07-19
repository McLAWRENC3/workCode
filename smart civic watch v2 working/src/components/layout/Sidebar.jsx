import { Menu, MenuItem } from 'react-pro-sidebar';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiSettings } from 'react-icons/fi';
import { IconButton } from '@mui/material';

export default function Sidebar({ collapsed }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Define menu items
  const menuItems = [
    { path: '/dashboard', icon: <FiHome />, label: 'Dashboard' },
    { path: '/reports', icon: <FiUsers />, label: 'Reports' },
    { path: '/settings', icon: <FiSettings />, label: 'Settings' }
  ];

  return (
    <div style={{ 
      height: '100vh',
      position: 'fixed',
      width: collapsed ? '80px' : '250px',
      transition: 'width 0.3s',
      backgroundColor: '#1976d2',
      color: 'white'
    }}>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            icon={item.icon}
            active={location.pathname === item.path || 
                   (item.path === '/dashboard' && location.pathname === '/')}
            onClick={() => navigate(item.path)}
            style={{
              padding: collapsed ? '0.5rem' : undefined,
              justifyContent: collapsed ? 'center' : undefined
            }}
          >
            {!collapsed && item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}