import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/Auth'
import InteractiveMapPage from './pages/InteractiveMapPage'
import AlertsPanel from './pages/Alert'
import CommunityReportsPage from './pages/report'
import EvacuationShelterPage from './pages/saftyRoutes'
import AdminDashboard from './pages/Admin'

function App() {

  return (
    <div >
      <Routes>
        <Route
        path='/'
        element={<AuthPage/>}
        />
        <Route
        path='/user/map'
        element={<InteractiveMapPage/>}
        />
        <Route
        path='/user/alert'
        element={<AlertsPanel/>}
        />
        <Route
        path='/user/reports'
        element={<CommunityReportsPage/>}
        />
        <Route
        path='/user/home'
        element={<CommunityReportsPage/>}
        />
        <Route
        path='/user/safety'
        element={<EvacuationShelterPage/>}
        />
        <Route
        path='/admin'
        element={<AdminDashboard/>}
        />
      </Routes>
    </div>
  )
}

export default App
