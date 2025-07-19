import { Grid } from '@mui/material';
import StatCard from '../../components/ui/StatCard';
import ReportHeatmap from '../../components/maps/ReportHeatmap';
import ReportsChart from '../../components/charts/ReportsChart';
import RecentActivity from '../../components/ui/RecentActivity';

export default function Dashboard() {
  const stats = [
    { title: 'Total Reports', value: '1,245', trend: 'up', change: '12%' },
    { title: 'Resolved', value: '892', trend: 'up', change: '8%' },
    { title: 'Active Alerts', value: '15', trend: 'down', change: '3%' },
    { title: 'Citizen Contributors', value: '423', trend: 'up', change: '24%' }
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <StatCard {...stat} />
        </Grid>
      ))}
      <Grid item xs={12} md={8}>
        <ReportsChart />
      </Grid>
      <Grid item xs={12} md={4}>
        <RecentActivity />
      </Grid>
      <Grid item xs={12}>
        <ReportHeatmap />
      </Grid>
    </Grid>
  );
}