import { Box, Typography } from '@mui/material';

export default function ReportHeatmap() {
  return (
    <Box sx={{ 
      p: 3, 
      bgcolor: 'background.paper', 
      borderRadius: 2, 
      height: 400 
    }}>
      <Typography variant="h6" gutterBottom>
        Report Density Map
      </Typography>
      <Box sx={{ 
        bgcolor: '#f5f5f5', 
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography color="text.secondary">Map will appear here</Typography>
      </Box>
    </Box>
  );
}