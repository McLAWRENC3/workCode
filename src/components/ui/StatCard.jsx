import { 
  Card, 
  CardContent, 
  Stack, 
  Typography, 
  Box, 
  useTheme 
} from '@mui/material';
import { motion } from 'framer-motion';

const StatCard = ({ 
  icon, 
  title, 
  value, 
  percentage, 
  color = 'primary', 
  trend, 
  trendValue 
}) => {
  const theme = useTheme();
  const colors = theme.palette[color];

  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: colors.light,
                color: colors.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {icon}
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="subtitle2" color="text.secondary">
                {title}
              </Typography>
              <Typography variant="h4" fontWeight={600}>
                {value}
              </Typography>
            </Box>
          </Stack>
          
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            {percentage && (
              <Typography variant="body2" color={colors.main}>
                {percentage}% resolved
              </Typography>
            )}
            {trend && (
              <Typography 
                variant="body2" 
                color={trend === 'up' ? theme.palette.success.main : theme.palette.error.main}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                {trend === 'up' ? '↑' : '↓'} {trendValue}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatCard;