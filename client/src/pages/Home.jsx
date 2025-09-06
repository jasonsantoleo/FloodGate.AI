import { useState, useEffect } from "react";
import { Bell, Camera, RefreshCw, Droplets, MapPin, AlertTriangle, Users, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";
export default function HomeDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Mock data for dashboard
  const dashboardData = {
    floodRisk: {
      level: "Medium",
      description: "Moderate risk due to recent rainfall",
      color: "orange"
    },
    activeAlerts: 3,
    communityReports: 8,
    lastUpdate: "08:54 AM",
    recentActivity: [
      { type: "alert", message: "New flood warning issued for Riverside District", time: "2 min ago" },
      { type: "report", message: "Community member reported water level rise", time: "8 min ago" },
      { type: "update", message: "Weather data synchronized successfully", time: "12 min ago" }
    ]
  };

  const getRiskColor = (level) => {
    switch (level.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">FG</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">FloodGate.AI</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/user/home" className="text-gray-600 hover:text-blue-800 font-medium">Home</Link>
            <Link to="/user/map" className="text-gray-600 hover:text-blue-800 font-medium">Map</Link>
            <Link to="/user/alert" className="text-gray-600 hover:text-blue-800 font-medium">Alerts</Link>
            <Link to="/user/reports" className="text-gray-600 hover:text-blue-800 font-medium">Reports</Link>
            <Link to='/user/safety' className="text-gray-600 hover:text-blue-800 font-medium">Evacuation</Link>
            <Link to='/admin' className="text-gray-600 hover:text-blue-800 font-medium">Admin</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            {formatTime(currentTime)}
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Users className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Welcome to FloodGate.AI
          </h1>
          <p className="text-lg text-gray-600">
            Get real-time flood risk insights for your neighborhood.
          </p>
        </div>

        {/* 3D Map Visualization Placeholder */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="h-80 bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                3D Flood Map Visualization Coming Soon
              </h3>
              <p className="text-gray-500 mb-4">
                Interactive 3D mapping technology for enhanced flood monitoring
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                <MapPin className="h-4 w-4 mr-2" />
                Chennai, Tamil Nadu Coverage
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Flood Risk Level */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getRiskColor(dashboardData.floodRisk.level)}`}>
                {dashboardData.floodRisk.level}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Flood Risk Level</h3>
            <p className="text-sm text-gray-600">{dashboardData.floodRisk.description}</p>
          </div>

          {/* Active Alerts */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Bell className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{dashboardData.activeAlerts}</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Active Alerts</h3>
            <p className="text-sm text-gray-600">Current flood warnings & advisories</p>
          </div>

          {/* Community Reports */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Camera className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{dashboardData.communityReports}</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Community Reports</h3>
            <p className="text-sm text-gray-600">Ground-level updates from residents</p>
          </div>

          {/* Last Update */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-lg font-semibold text-gray-900">{dashboardData.lastUpdate}</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Last Data Update</h3>
            <p className="text-sm text-gray-600">System synchronized successfully</p>
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">View Interactive Map</span>
                </div>
                <span className="text-blue-600">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-left">
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-gray-900">Check Active Alerts</span>
                </div>
                <span className="text-orange-600">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors text-left">
                <div className="flex items-center space-x-3">
                  <Camera className="h-5 w-5 text-teal-600" />
                  <span className="font-medium text-gray-900">Upload Report</span>
                </div>
                <span className="text-teal-600">→</span>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {dashboardData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'alert' ? 'bg-red-100' :
                    activity.type === 'report' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {activity.type === 'alert' && <Bell className="h-4 w-4 text-red-600" />}
                    {activity.type === 'report' && <Camera className="h-4 w-4 text-blue-600" />}
                    {activity.type === 'update' && <RefreshCw className="h-4 w-4 text-green-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 bg-gradient-to-r from-blue-800 to-teal-600 rounded-lg p-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-blue-100">Monitoring</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Chennai</div>
              <div className="text-blue-100">Coverage Area</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Real-time</div>
              <div className="text-blue-100">Data Updates</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}