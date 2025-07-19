import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { FaBell, FaCheckCircle, FaChartBar, FaGift } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalReports: 0,
    resolvedReports: 0,
    activeAlerts: 0,
    rewardsGiven: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      setStats({
        totalReports: 124,
        resolvedReports: 89,
        activeAlerts: 7,
        rewardsGiven: 42
      });
    };
    fetchStats();
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="p-8 flex-1">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back, <span className="font-semibold">{user?.email}</span>
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<FaChartBar />} title="Total Reports" value={stats.totalReports} />
          <StatCard icon={<FaCheckCircle />} title="Resolved" value={stats.resolvedReports} percentage={(stats.resolvedReports / stats.totalReports * 100).toFixed(0)} />
          <StatCard icon={<FaBell />} title="Active Alerts" value={stats.activeAlerts} alert />
          <StatCard icon={<FaGift />} title="Rewards Given" value={stats.rewardsGiven} />
        </section>

        <RecentActivity />
      </main>
    </div>
  );
};

const StatCard = ({ title, value, percentage, alert, icon }) => (
  <div className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 ${alert ? 'border-l-4 border-red-500' : 'border-l-4 border-indigo-500'}`}>
    <div className={`text-2xl ${alert ? 'text-red-500' : 'text-indigo-500'}`}>
      {icon}
    </div>
    <div>
      <h3 className="text-sm text-gray-500 uppercase tracking-wide">{title}</h3>
      <p className="text-xl font-semibold">{value}</p>
      {percentage && <p className="text-green-600 text-sm mt-1">{percentage}% resolved</p>}
    </div>
  </div>
);

const RecentActivity = () => (
  <section className="bg-white p-6 rounded-2xl shadow-sm">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
    <p className="text-gray-500">No recent activity</p>
  </section>
);

export default Dashboard;
