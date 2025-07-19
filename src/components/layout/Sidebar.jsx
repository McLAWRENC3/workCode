import { useState } from 'react';
import { 
  ProSidebar, 
  Menu, 
  MenuItem, 
  SubMenu, 
  SidebarHeader,
  SidebarContent,
  SidebarFooter
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { 
  FiHome, 
  FiAlertTriangle, 
  FiUsers, 
  FiGift, 
  FiSettings,
  FiMap,
  FiPieChart,
  FiLogOut
} from 'react-icons/fi';
import { Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Sidebar = ({ collapsed, toggled, handleToggle }) => {
  const theme = useTheme();
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggle}
      breakPoint="md"
      style={{
        height: '100vh',
        position: 'fixed',
        zIndex: 1000,
        boxShadow: theme.shadows[4],
      }}
    >
      <SidebarHeader>
        <div style={{ 
          padding: '24px 16px', 
          textAlign: 'center',
          color: theme.palette.primary.main
        }}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="h6" fontWeight={600}>
              {collapsed ? 'SCW' : 'Smart Civic Watch'}
            </Typography>
          </motion.div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FiHome />}
            active={activeMenu === 'dashboard'}
            onClick={() => setActiveMenu('dashboard')}
          >
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem
            icon={<FiAlertTriangle />}
            active={activeMenu === 'reports'}
            onClick={() => setActiveMenu('reports')}
          >
            <Link to="/reports">Reports</Link>
          </MenuItem>
          <MenuItem
            icon={<FiUsers />}
            active={activeMenu === 'citizens'}
            onClick={() => setActiveMenu('citizens')}
          >
            <Link to="/citizens">Citizens</Link>
          </MenuItem>
          <MenuItem
            icon={<FiGift />}
            active={activeMenu === 'rewards'}
            onClick={() => setActiveMenu('rewards')}
          >
            <Link to="/rewards">Rewards</Link>
          </MenuItem>
          <SubMenu
            title="Analytics"
            icon={<FiPieChart />}
            active={activeMenu === 'analytics'}
            onClick={() => setActiveMenu('analytics')}
          >
            <MenuItem>
              <Link to="/analytics/reports">Reports</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/analytics/citizens">Citizens</Link>
            </MenuItem>
          </SubMenu>
          <MenuItem
            icon={<FiMap />}
            active={activeMenu === 'heatmap'}
            onClick={() => setActiveMenu('heatmap')}
          >
            <Link to="/heatmap">Heatmap</Link>
          </MenuItem>
        </Menu>
      </SidebarContent>
      
      <SidebarFooter>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FiSettings />}
            active={activeMenu === 'settings'}
            onClick={() => setActiveMenu('settings')}
          >
            <Link to="/settings">Settings</Link>
          </MenuItem>
          <MenuItem
            icon={<FiLogOut />}
            onClick={() => {
              // Handle logout
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;