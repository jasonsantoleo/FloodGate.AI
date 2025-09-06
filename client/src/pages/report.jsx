import { useState } from "react";
import { Camera, Upload, MapPin, Clock, Users, Eye, MessageCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
export default function CommunityReportsPage() {
  const [selectedReport, setSelectedReport] = useState(null);

  // Mock reports data
  const reports = [
    {
      id: 1,
      location: "Riverside District",
      timestamp: "Sep 6, 7:30 AM",
      status: "Flooded",
      image: "/api/placeholder/300/200",
      author: "Ravi Kumar",
      description: "Water level has risen significantly after overnight rainfall. Road access blocked.",
      likes: 12,
      comments: 5,
      views: 234
    },
    {
      id: 2,
      location: "Market Street",
      timestamp: "Sep 6, 8:15 AM",
      status: "Alert",
      image: "/api/placeholder/300/200",
      author: "Priya Sharma",
      description: "Heavy rain continues, drains overflowing but still manageable.",
      likes: 8,
      comments: 3,
      views: 156
    },
    {
      id: 3,
      location: "Old Town",
      timestamp: "Sep 5, 9:55 PM",
      status: "Safe",
      image: "/api/placeholder/300/200",
      author: "Mohan Das",
      description: "Area remains dry, all drainage systems functioning normally.",
      likes: 15,
      comments: 2,
      views: 189
    },
    {
      id: 4,
      location: "Industrial Zone",
      timestamp: "Sep 6, 9:00 AM",
      status: "Critical",
      image: "/api/placeholder/300/200",
      author: "Facility Manager",
      description: "Severe flooding reported, all personnel evacuated safely.",
      likes: 25,
      comments: 12,
      views: 445
    },
    {
      id: 5,
      location: "Beach Road",
      timestamp: "Sep 6, 6:45 AM",
      status: "Alert",
      image: "/api/placeholder/300/200",
      author: "Coastal Guard",
      description: "High tide and strong winds causing water to splash onto road.",
      likes: 18,
      comments: 7,
      views: 298
    },
    {
      id: 6,
      location: "City Center",
      timestamp: "Sep 6, 10:30 AM",
      status: "Safe",
      image: "/api/placeholder/300/200",
      author: "Local Resident",
      description: "Morning cleanup in progress, water has receded significantly.",
      likes: 22,
      comments: 9,
      views: 334
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "Flooded":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Alert":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Safe":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleUpload = () => {
    alert("Upload functionality would be implemented here. Users could select photos/videos to share flood updates.");
  };

  const openReport = (report) => {
    setSelectedReport(report);
  };

  const closeReport = () => {
    setSelectedReport(null);
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
      <div className="max-w-6xl mx-auto p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Community Reports</h1>
          <p className="text-gray-600">Real-time flood updates from community members</p>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="h-8 w-8 text-blue-600" />
            </div>
            
            <button
              onClick={handleUpload}
              className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center space-x-2 mx-auto mb-3"
            >
              <Upload className="h-5 w-5" />
              <span>Upload Photo/Video</span>
            </button>
            
            <p className="text-gray-600 text-sm">
              Share ground-level flood updates for your neighborhood
            </p>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div
              key={report.id}
              onClick={() => openReport(report)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 font-medium">Photo/Video Preview</p>
                  <p className="text-xs text-gray-400">{report.location}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="font-medium">{report.location}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(report.status)}`}>
                    {report.status}
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="h-4 w-4 mr-1" />
                  {report.timestamp}
                </div>

                <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                  {report.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>By {report.author}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {report.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      {report.comments}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {report.views}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-2 rounded-lg transition-colors">
            Load More Reports
          </button>
        </div>
      </div>

      {/* Report Detail Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedReport.status)}`}>
                  {selectedReport.status}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedReport.location}
                </h2>
              </div>
              <button
                onClick={closeReport}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-gray-400 mx-auto mb-3" />
                  <p className="text-lg text-gray-500 font-medium">Full Size Photo/Video</p>
                  <p className="text-sm text-gray-400">{selectedReport.location}</p>
                </div>
              </div>

              {/* Report Details */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    {selectedReport.timestamp} • By {selectedReport.author}
                  </div>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {selectedReport.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1 text-red-500" />
                      {selectedReport.likes} likes
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1 text-blue-500" />
                      {selectedReport.comments} comments
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1 text-gray-500" />
                      {selectedReport.views} views
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors">
                      Share Report
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Flag Content
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}