import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './app.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewUser from './pages/newUser/NewUser'
import ReportList from './pages/reportList/ReportList'
import ChartList from './pages/chartList/ChartList'


function App() {
  return (
    <Router>
     <Topbar />
    <div className="container">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />   
        <Route path="/reports" element={<ReportList />} />
        <Route path="/report/:reportId" element={<User />} />
        <Route path="/newReport" element={<NewUser />} />        
        <Route path="/chartList" element={<ChartList />} />  
        </Routes>
     </div>
    </Router>
  )
}

export default App
