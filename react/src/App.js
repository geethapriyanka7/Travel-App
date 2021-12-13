import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ViewCust from './components/Customer/ViewCust'
import Test from './components/Customer/Test'
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import ViewOwn from './components/Owner/ViewOwn'
import ViewAirl from './components/airlines/ViewAirl'
import ViewFlights from './components/Flights/viewFlights'
import OwnerHome from './components/Owner/OwnerHome'
import DeleteOwner from './components/Owner/DeleteOwner'
import ViewAp from './components/Airport/ViewAp';
import LogAd from './components/Login/LogAd';
import Mainlogin from './components/Login/MainLogin'
import AdminHome from './components/Admin/AdminHome'
import CustomerHome from './components/Customer/CustomerHome'
import AdminProcessDate from './components/Admin/AdminProcessDate'
import ScheduleFlight from './components/Flights/ScheduleFlight'
import AddProp from './components/Owner/AddProp'
import CreateAccountCust from './components/Login/CreateAccountCust'
import CreateAccountOwner from './components/Login/CreateAccountOwner'
import ViewProp from './components/Properties/ViewProp'
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route path="/a" element={<Test/>}/>
          <Route path="/vc" element={<ViewCust/>}/>
          <Route path="/vo" element={<ViewOwn/>}/>
          <Route path="/val" element={<ViewAirl/>}/>
          <Route path="/vap" element={<ViewAp/>}/>
          <Route path="/vf" element={<ViewFlights/>}/>
          <Route path="/oh" element={<OwnerHome/>}/>
          <Route path="/do" element={<DeleteOwner/>}/>
          <Route path="/admins" element={<LogAd/>}/>
          <Route path="/l" element={<Mainlogin/>}/>
          <Route path="/ah" element={<AdminHome/>}/>
          <Route path="/ch" element={<CustomerHome/>}/>
          <Route path="/apd" element={<AdminProcessDate/>}/>
          <Route path="/sf" element={<ScheduleFlight/>}/>
          <Route path="/ap" element={<AddProp/>}/>
          <Route path="/cac" element={<CreateAccountCust/>}/>
          <Route path="/cao" element={<CreateAccountOwner/>}/>
          <Route path="/vp" element={<ViewProp/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
