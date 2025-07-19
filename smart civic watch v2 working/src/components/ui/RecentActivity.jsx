import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function RecentActivity() {
  const activities = [
    { time: '10 min ago', action: 'New report submitted', location: 'Downtown' },
    { time: '25 min ago', action: 'Report resolved', location: 'City Park' },
    { time: '1 hour ago', action: 'New citizen registered', location: 'Suburbs' }
  ];

  return (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index} sx={{ px: 0 }}>
            <ListItemText
              primary={activity.action}
              secondary={`${activity.location} • ${activity.time}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}