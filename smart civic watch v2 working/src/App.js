import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './assets/styles/theme';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Dashboard from './pages/dashboard/Dashboard';
import Reports from './pages/reports/Reports';
import Settings from './pages/settings/Settings';

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex' }}>
        <Sidebar collapsed={collapsed} />
        <main style={{
          flexGrow: 1,
          padding: '24px',
          marginLeft: collapsed ? '80px' : '250px',
          transition: 'margin-left 0.3s ease',
          backgroundColor: '#f5f5f5',
          minHeight: '100vh'
        }}>
          <Topbar onMenuClick={() => setCollapsed(!collapsed)} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}