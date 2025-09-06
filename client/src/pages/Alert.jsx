import { useState } from "react";
import { X, MapPin, Clock, AlertTriangle, Info, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
export default function AlertsPanel() {
  const [selectedAlert, setSelectedAlert] = useState(null);
  // Mock alert data
  const alerts = [
    {
      id: 1,
      title: "Flood Warning: Riverside District",
      timestamp: "8:32 AM - Sep 6",
      severity: "Critical",
      description: "Water levels expected to rise 1.2m by noon. Consider evacuation.",
      expandedDescription: "Heavy rainfall over the past 12 hours has caused the Riverside area water levels to rise rapidly. Current projections indicate water levels will reach 1.2 meters above normal by noon today. Residents in low-lying areas should prepare for immediate evacuation.",
      location: "Riverside District, Chennai",
      actionSteps: [
        "Evacuate to nearest safe zone immediately",
        "Move valuables to higher floors",
        "Avoid driving through flooded roads",
        "Stay tuned to emergency broadcasts"
      ],
      contact: "Emergency Helpline: 1800-425-2000",
      affectedAreas: "Riverside District, Lower Market Area",
      estimatedAffected: "~2,500 residents"
    },
    {
      id: 2,
      title: "Flood Advisory: Market Street",
      timestamp: "7:45 AM - Sep 6",
      severity: "Warning",
      description: "Rainfall expected to continue. Minor flooding possible in low areas.",
      expandedDescription: "Moderate to heavy rainfall is expected to continue throughout the morning. Low-lying areas along Market Street may experience minor flooding. Residents should exercise caution and avoid unnecessary travel.",
      location: "Market Street Area, Chennai",
      actionSteps: [
        "Avoid walking through waterlogged areas",
        "Keep emergency supplies ready",
        "Monitor weather updates regularly",
        "Report any drainage issues to authorities"
      ],
      contact: "City Control Room: 1800-425-1000",
      affectedAreas: "Market Street, Commercial District",
      estimatedAffected: "~800 residents"
    },
    {
      id: 3,
      title: "Info: All Clear - Town Center",
      timestamp: "6:50 AM - Sep 6",
      severity: "Info",
      description: "No flooding expected. Normal conditions maintained.",
      expandedDescription: "Weather conditions in the Town Center area remain stable. Drainage systems are functioning normally and no flooding is expected. Residents can continue with regular activities.",
      location: "Town Center, Chennai",
      actionSteps: [
        "Continue normal activities",
        "Stay informed about weather updates",
        "Report any unusual water accumulation"
      ],
      contact: "Information Helpline: 1800-425-3000",
      affectedAreas: "Town Center, Central Business District",
      estimatedAffected: "All clear"
    },
    {
      id: 4,
      title: "Flash Flood Alert: Industrial Zone",
      timestamp: "9:15 AM - Sep 6",
      severity: "Critical",
      description: "Immediate evacuation required. Industrial drainage overwhelmed.",
      expandedDescription: "Industrial area drainage systems have been overwhelmed due to unprecedented rainfall. Flash flooding is imminent in the Industrial Zone. All personnel must evacuate immediately. Emergency services are on standby.",
      location: "Industrial Zone, Chennai",
      actionSteps: [
        "Evacuate industrial premises immediately",
        "Shut down non-essential equipment safely",
        "Move to designated safety zones",
        "Coordinate with facility emergency teams"
      ],
      contact: "Industrial Emergency: 1800-425-4000",
      affectedAreas: "Industrial Zone, Manufacturing District",
      estimatedAffected: "~1,200 workers"
    },
    {
      id: 5,
      title: "Weather Update: Coastal Areas",
      timestamp: "5:30 AM - Sep 6",
      severity: "Warning",
      description: "High tide and strong winds expected. Beach areas to avoid.",
      expandedDescription: "Coastal areas are experiencing high tide conditions combined with strong winds. Beach access is not recommended. Fishing activities should be suspended until further notice.",
      location: "Coastal Areas, Chennai",
      actionSteps: [
        "Avoid beach areas and coastal roads",
        "Secure loose outdoor items",
        "Suspend fishing and water sports",
        "Stay away from pier and jetty areas"
      ],
      contact: "Coast Guard: 1800-425-5000",
      affectedAreas: "All Coastal Areas, Marina Beach",
      estimatedAffected: "~500 coastal residents"
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "Warning":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Info":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case "Critical":
        return <AlertTriangle className="h-4 w-4" />;
      case "Warning":
        return <AlertTriangle className="h-4 w-4" />;
      case "Info":
        return <Info className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const openAlert = (alert) => {
    setSelectedAlert(alert);
  };

  const closeAlert = () => {
    setSelectedAlert(null);
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
            <span className="text-xl font-semibold text-gray-900 hidden sm:block">FloodGate.AI</span>
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
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Users className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Current Alerts</h1>
          <p className="text-gray-600">Active flood alerts and notifications for Chennai region</p>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              onClick={() => openAlert(alert)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {alert.title}
                </h3>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center space-x-1 ${getSeverityColor(alert.severity)}`}>
                  {getSeverityIcon(alert.severity)}
                  <span>{alert.severity}</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Clock className="h-4 w-4 mr-1" />
                {alert.timestamp}
              </div>
              
              <p className="text-gray-700 mb-3">{alert.description}</p>
              
              <div className="flex items-center text-sm text-blue-600">
                <MapPin className="h-4 w-4 mr-1" />
                {alert.location}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Detail Modal */}
      {selectedAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center space-x-1 ${getSeverityColor(selectedAlert.severity)}`}>
                  {getSeverityIcon(selectedAlert.severity)}
                  <span>{selectedAlert.severity}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedAlert.title}
                </h2>
              </div>
              <button
                onClick={closeAlert}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Timestamp and Location */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedAlert.timestamp}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedAlert.location}
                </div>
              </div>

              {/* Expanded Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Alert Details</h3>
                <p className="text-gray-700 leading-relaxed">{selectedAlert.expandedDescription}</p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 font-medium">Location Map Placeholder</p>
                  <p className="text-sm text-gray-400">{selectedAlert.location}</p>
                </div>
              </div>

              {/* Action Steps */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Action Steps</h3>
                <ul className="space-y-2">
                  {selectedAlert.actionSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">Affected Areas</h4>
                  <p className="text-sm text-gray-600">{selectedAlert.affectedAreas}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">Estimated Affected</h4>
                  <p className="text-sm text-gray-600">{selectedAlert.estimatedAffected}</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-900">Emergency Contact</h3>
                </div>
                <p className="text-blue-800">{selectedAlert.contact}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="flex-1 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium">
                  Share Alert
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  Mark as Read
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}