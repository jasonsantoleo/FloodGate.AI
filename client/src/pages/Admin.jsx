import React from 'react';
import { AlertTriangle, Home, Users, Building, Camera, Edit, Plus } from 'lucide-react';

const AdminDashboard = () => {
  // Sample data for stats cards
  const statsCards = [
    {
      title: "Active Flood Warnings",
      value: "8",
      icon: <AlertTriangle className="w-8 h-8 text-orange-400" />,
      bgColor: "bg-slate-800",
      textColor: "text-white"
    },
    {
      title: "Affected Households",
      value: "1,200",
      icon: <Home className="w-8 h-8 text-blue-400" />,
      bgColor: "bg-slate-800",
      textColor: "text-white"
    },
    {
      title: "Shelters Open/Capacity",
      value: "10/15",
      icon: <Building className="w-8 h-8 text-teal-400" />,
      bgColor: "bg-slate-800",
      textColor: "text-white"
    },
    {
      title: "Reports in Last 24h",
      value: "27",
      icon: <Camera className="w-8 h-8 text-green-400" />,
      bgColor: "bg-slate-800",
      textColor: "text-white"
    }
  ];

  // Sample data for resource allocation table
  const resourceData = [
    {
      region: "Central District",
      status: "Critical",
      statusColor: "bg-red-100 text-red-800 border-red-200",
      resources: "2 boats, 1 rescue team",
      action: "Allocate"
    },
    {
      region: "North Zone",
      status: "Stable",
      statusColor: "bg-green-100 text-green-800 border-green-200",
      resources: "0 boats",
      action: "Allocate"
    },
    {
      region: "South District",
      status: "Under Watch",
      statusColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
      resources: "1 boat, med kits",
      action: "Edit"
    },
    {
      region: "East Zone",
      status: "Critical",
      statusColor: "bg-red-100 text-red-800 border-red-200",
      resources: "3 boats, 2 teams",
      action: "Edit"
    },
    {
      region: "West District",
      status: "Stable",
      statusColor: "bg-green-100 text-green-800 border-green-200",
      resources: "1 boat, medical supplies",
      action: "Allocate"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">FG</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 hidden sm:block">FloodGate.AI</span>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="/user/home" className="text-gray-600 hover:text-blue-800 font-medium">Home</a>
            <a href="/user/map" className="text-gray-600 hover:text-blue-800 font-medium">Map</a>
            <a href="/user/alert" className="text-gray-600 hover:text-blue-800 font-medium">Alerts</a>
            <a href="/user/reports" className="text-gray-600 hover:text-blue-800 font-medium">Reports</a>
            <a href="/user/safety" className="text-gray-600 hover:text-blue-800 font-medium">Evacuation</a>
            <a href="/admin/dashboard" className="text-blue-800 hover:text-blue-800 font-medium border-b-2 border-blue-800">Admin</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Users className="h-5 w-5 text-gray-600" />
          </button>
          {/* User Profile */}
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Users className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">FloodGate.AI Admin Dashboard</h1>
        </div>

        {/* Stats Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <div key={index} className={`${card.bgColor} ${card.textColor} rounded-lg shadow-lg p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80 mb-2">{card.title}</p>
                  <p className="text-3xl font-bold">{card.value}</p>
                </div>
                <div className="flex-shrink-0">
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Chart 1 - Flood Risk Trend */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Flood Risk Trend (Last 7 Days)</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Chart Placeholder</span>
            </div>
          </div>

          {/* Chart 2 - Community Reports */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Reports Distribution</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Chart Placeholder</span>
            </div>
          </div>
        </div>

        {/* Resource Allocation Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Resource Allocation</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Region/Zone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resources Deployed
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resourceData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {row.resources}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                        row.action === 'Edit' 
                          ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                          : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                      }`}>
                        {row.action === 'Edit' ? <Edit className="w-3 h-3 mr-1" /> : <Plus className="w-3 h-3 mr-1" />}
                        {row.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;