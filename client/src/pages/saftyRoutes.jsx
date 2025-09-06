import { useState } from "react";
import { Search, MapPin, Navigation, Phone, Users, Clock, Shield, AlertCircle, Route } from "lucide-react";
import { Link } from "react-router-dom";

export default function EvacuationShelterPage() {
  const [location, setLocation] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Mock shelter data
  const shelters = [
    {
      id: 1,
      name: "City School Auditorium",
      address: "123 Main Street, Chennai",
      distance: "1.2 km",
      status: "Open",
      capacity: "500 people",
      phone: "+91-44-2345-6789",
      facilities: ["Medical Aid", "Food", "Water", "Restrooms"],
      coordinates: { lat: 13.0827, lng: 80.2707 }
    },
    {
      id: 2,
      name: "Community Hall",
      address: "456 Park Avenue, Chennai",
      distance: "2.1 km",
      status: "Approaching Capacity",
      capacity: "300 people",
      phone: "+91-44-2345-6790",
      facilities: ["Food", "Water", "Restrooms"],
      coordinates: { lat: 13.0878, lng: 80.2785 }
    },
    {
      id: 3,
      name: "Sports Complex",
      address: "789 Stadium Road, Chennai",
      distance: "3.4 km",
      status: "Open",
      capacity: "800 people",
      phone: "+91-44-2345-6791",
      facilities: ["Medical Aid", "Food", "Water", "Restrooms", "Security"],
      coordinates: { lat: 13.0732, lng: 80.2609 }
    },
    {
      id: 4,
      name: "Government School",
      address: "321 Education Lane, Chennai",
      distance: "4.2 km",
      status: "Closed",
      capacity: "400 people",
      phone: "+91-44-2345-6792",
      facilities: ["Food", "Water"],
      coordinates: { lat: 13.0912, lng: 80.2889 }
    }
  ];

  const evacuationRoute = {
    from: "Your Location",
    to: "City School Auditorium",
    route: "Main St → Broad Avenue → Park Road → City School Auditorium",
    distance: "1.2 km",
    estimatedTime: "15 minutes walking",
    warnings: ["Avoid Anna Salai - Heavy flooding reported", "Use elevated pedestrian walkways where available"]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800 border-green-200";
      case "Approaching Capacity":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Closed":
        return "bg-gray-100 text-gray-600 border-gray-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Open":
        return "🟢";
      case "Approaching Capacity":
        return "🟡";
      case "Closed":
        return "🔴";
      default:
        return "⚪";
    }
  };

  const handleSearch = () => {
    if (location.trim()) {
      setShowResults(true);
    }
  };

  const handleShowRoute = (shelter) => {
    alert(`Route to ${shelter.name}: This would open detailed turn-by-turn directions in a real implementation.`);
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
          <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            Emergency Mode
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Users className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Emergency Banner */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 text-red-800">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">Emergency Evacuation Information</span>
          </div>
          <p className="text-red-700 mt-1 text-sm">
            If you are in immediate danger, call emergency services: <strong>112</strong> or <strong>1070</strong>
          </p>
        </div>

        {/* Location Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Find Safe Shelters & Evacuation Routes
          </h1>
          <p className="text-gray-600 mb-6">
            Enter your address or choose your location to see nearby shelters and recommended evacuation routes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter your location (e.g., T. Nagar, Chennai)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Find Shelters</span>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-600">Quick locations:</span>
            {["T. Nagar", "Anna Nagar", "Adyar", "Velachery"].map((area) => (
              <button
                key={area}
                onClick={() => setLocation(area)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Results Section */}
        {(showResults || location) && (
          <div className="space-y-6">
            {/* Shelter Cards */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Nearby Emergency Shelters
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shelters.map((shelter) => (
                  <div
                    key={shelter.id}
                    className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 text-lg">{shelter.name}</h3>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium border flex items-center space-x-1 ${getStatusColor(shelter.status)}`}>
                        <span>{getStatusIcon(shelter.status)}</span>
                        <span>{shelter.status}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {shelter.address}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Navigation className="h-4 w-4 mr-2" />
                        {shelter.distance} away
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        Capacity: {shelter.capacity}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        {shelter.phone}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-1">Available facilities:</div>
                      <div className="flex flex-wrap gap-1">
                        {shelter.facilities.map((facility, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleShowRoute(shelter)}
                      disabled={shelter.status === "Closed"}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                        shelter.status === "Closed"
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-blue-800 hover:bg-blue-900 text-white"
                      }`}
                    >
                      <Route className="h-4 w-4" />
                      <span>Show Route</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Route */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-5 w-5 mr-2 text-green-600" />
                Recommended Evacuation Route
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">From:</span>
                      <span className="font-medium">{evacuationRoute.from}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">To:</span>
                      <span className="font-medium">{evacuationRoute.to}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Distance:</span>
                      <span className="font-medium">{evacuationRoute.distance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Est. Time:</span>
                      <span className="font-medium">{evacuationRoute.estimatedTime}</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm font-medium text-blue-900 mb-1">Route:</div>
                    <div className="text-sm text-blue-800">{evacuationRoute.route}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-900 mb-2">Safety Warnings:</div>
                  <div className="space-y-2">
                    {evacuationRoute.warnings.map((warning, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{warning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Route Visualization Placeholder */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Route className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Evacuation Route Visualization Coming Soon
                  </h4>
                  <p className="text-gray-500">
                    Interactive route mapping with real-time traffic and hazard updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Emergency Contacts */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            Emergency Contacts
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-medium text-red-900">Emergency Services</div>
              <div className="text-red-800">112 (All emergencies)</div>
            </div>
            <div>
              <div className="font-medium text-red-900">Disaster Management</div>
              <div className="text-red-800">1070</div>
            </div>
            <div>
              <div className="font-medium text-red-900">Flood Control Room</div>
              <div className="text-red-800">1800-425-1000</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}