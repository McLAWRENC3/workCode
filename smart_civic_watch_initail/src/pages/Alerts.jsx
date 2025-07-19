// Alerts.jsx
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'Emergency', message: 'Fire outbreak in Kabulonga', area: 'Kabulonga', status: 'Active' },
    { id: 2, type: 'Warning', message: 'Flood warning for Kanyama area', area: 'Kanyama', status: 'Active' },
    { id: 3, type: 'Info', message: 'Road construction on Great North Road', area: 'Lusaka CBD', status: 'Expired' },
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-4">Alerts Management</h1>
        
        <div className="mb-4 flex justify-between items-center">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Create New Alert
          </button>
          <div className="flex space-x-2">
            <button className="border border-gray-300 px-4 py-2 rounded">Filter</button>
            <button className="border border-gray-300 px-4 py-2 rounded">Export</button>
          </div>
        </div>
        
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className={`p-4 rounded shadow border-l-4 
              ${alert.type === 'Emergency' ? 'border-red-500 bg-red-50' : 
                alert.type === 'Warning' ? 'border-yellow-500 bg-yellow-50' : 
                'border-blue-500 bg-blue-50'}`}>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">{alert.type} - {alert.area}</h3>
                  <p className="text-gray-700">{alert.message}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full 
                    ${alert.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {alert.status}
                  </span>
                  <button className="text-indigo-600 hover:text-indigo-800">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts;