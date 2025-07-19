import { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { 
  FiAlertTriangle, 
  FiCheckCircle, 
  FiMapPin, 
  FiUsers,
  FiTrendingUp 
} from 'react-icons/fi';
import StatCard from '../../components/ui/StatCard';
import ReportHeatmap from '../../components/maps/ReportHeatmap';
import ReportsChart from '../../components/charts/ReportsChart';
import RecentActivity from '../../components/ui/RecentActivity';
import api from '../../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalReports: 0,
    resolvedReports: 0,
    activeAlerts: 0,
    rewardsGiven: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, activityRes] = await Promise.all([
          api.get('/dashboard/stats'),
          api.get('/dashboard/activity'),
        ]);
        setStats(statsRes.data);
        setRecentActivity(activityRes.data);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      
      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<FiAlertTriangle size={24} />}
            title="Active Alerts"
            value={stats.activeAlerts}
            color="error"
            trend="up"
            trendValue="12%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<FiCheckCircle size={24} />}
            title="Resolved"
            value={stats.resolvedReports}
            percentage={Math.round((stats.resolvedReports / stats.totalReports) * 100)}
            color="success"
            trend="up"
            trendValue="8%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<FiMapPin size={24} />}
            title="Total Reports"
            value={stats.totalReports}
            color="info"
            trend="down"
            trendValue="3%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<FiUsers size={24} />}
            title="Rewards Given"
            value={stats.rewardsGiven}
            color="warning"
            trend="up"
            trendValue="24%"
          />
        </Grid>
      </Grid>

      {/* Charts and Maps */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <ReportsChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentActivity activities={recentActivity} />
        </Grid>
        <Grid item xs={12}>
          <ReportHeatmap />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;