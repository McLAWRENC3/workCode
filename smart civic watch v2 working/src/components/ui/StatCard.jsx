import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

export default function StatCard({ title, value, trend, change }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="h4">{value}</Typography>
          <Box color={trend === 'up' ? 'success.main' : 'error.main'}>
            {trend === 'up' ? <TrendingUp /> : <TrendingDown />}
            <Typography variant="caption">{change}</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}