import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './assets/styles/theme';
import Sidebar from './components/layout/Sidebar';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar 
          collapsed={collapsed}
          toggled={toggled}
          handleToggle={() => setToggled(!toggled)}
        />
        <main style={{ 
          flex: 1, 
          padding: '20px',
          marginLeft: collapsed ? '80px' : '270px',
          transition: 'margin-left 0.3s ease'
        }}>
          <button onClick={() => setCollapsed(!collapsed)}>
            Toggle Collapse
          </button>
          <h1>Main Content Area</h1>
          <p>Sidebar is {collapsed ? 'collapsed' : 'expanded'}</p>
        </main>
      </div>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;