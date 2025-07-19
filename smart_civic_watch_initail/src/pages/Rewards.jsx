// Rewards.jsx
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const Rewards = () => {
  const [rewards, setRewards] = useState([
    { id: 1, user: 'user1@example.com', points: 150, lastActivity: '2025-07-14', status: 'Active' },
    { id: 2, user: 'user2@example.com', points: 75, lastActivity: '2025-07-10', status: 'Active' },
    { id: 3, user: 'user3@example.com', points: 200, lastActivity: '2025-06-28', status: 'Redeemed' },
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-4">Rewards System</h1>
        
        <div className="mb-6 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Rewards Summary</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="border p-3 rounded">
              <h3 className="text-gray-500 text-sm">Total Active Users</h3>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="border p-3 rounded">
              <h3 className="text-gray-500 text-sm">Total Points Distributed</h3>
              <p className="text-2xl font-bold">425</p>
            </div>
            <div className="border p-3 rounded">
              <h3 className="text-gray-500 text-sm">Average Points per User</h3>
              <p className="text-2xl font-bold">141.7</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Activity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rewards.map((reward) => (
                <tr key={reward.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{reward.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reward.points}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reward.lastActivity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${reward.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                      {reward.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Adjust</button>
                    <button className="text-indigo-600 hover:text-indigo-900">Notify</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rewards;