import { useState } from "react";
import { Search, Plus, Minus, Waves, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
export default function InteractiveMapPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [zoomLevel, setZoomLevel] = useState(5);
  const [waterAnimation, setWaterAnimation] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // Here you would integrate with map API to search location
    }
  };

  const handleZoomIn = () => {
    if (zoomLevel < 18) {
      setZoomLevel(prev => prev + 1);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(prev => prev - 1);
    }
  };

  const toggleWaterAnimation = () => {
    setWaterAnimation(prev => !prev);
  };

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
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
            <Link to='/user/safety' className="text-gray-600 hover:text-blue-800 font-medium">Admin</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile menu toggle */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          
          {/* User Profile */}
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <User className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex relative">
        {/* Sidebar */}
        <div className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed md:relative z-20 w-80 md:w-72 bg-white border-r border-gray-200 h-full transition-transform duration-300 ease-in-out`}>
          
          {/* Mobile sidebar header */}
          <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200">
            <span className="font-semibold text-gray-900">Map Controls</span>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Location Search */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                Location Search
              </h3>
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search Location"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent text-sm"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="px-3 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Map Controls */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                Map Controls
              </h3>
              <div className="space-y-3">
                {/* Zoom Controls */}
                <div className="flex space-x-2">
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 18}
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Zoom In
                  </button>
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                  >
                    <Minus className="h-4 w-4 mr-2" />
                    Zoom Out
                  </button>
                </div>

                {/* Water Animation Toggle */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Waves className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">Water Animation</span>
                  </div>
                  <button
                    onClick={toggleWaterAnimation}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      waterAnimation ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        waterAnimation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Current Settings Display */}
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="text-xs font-semibold text-blue-900 mb-2">Current Settings</h4>
              <div className="space-y-1 text-xs text-blue-800">
                <div>Zoom Level: {zoomLevel}</div>
                <div>Water Animation: {waterAnimation ? 'ON' : 'OFF'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleSidebar}
          />
        )}

        {/* Map Area */}
        <div className="flex-1 p-6">
          <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Waves className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                3D Flood Map Visualization
              </h3>
              <p className="text-gray-500 mb-4">
                Interactive map placeholder - Integration with mapping service pending
              </p>
              <div className="text-sm text-gray-400">
                Current Location: Not Set | Zoom: {zoomLevel} | Animation: {waterAnimation ? 'ON' : 'OFF'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <footer className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Zoom: {zoomLevel}</span>
            <span>Water Animation: {waterAnimation ? 'ON' : 'OFF'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>System Online</span>
          </div>
        </div>
      </footer>
    </div>
  );
}