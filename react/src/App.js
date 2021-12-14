import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ViewCust from './components/Customer/ViewCust'
import Test from './components/Customer/Test'
// import Navbar from './components/Layout/Navbar';
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
import RemoveFlights from "./components/Flights/RemoveFlights"
import CancelFlight from "./components/Flights/CancelFlight"
import BookFlight from "./components/Flights/BookFlight"
import ReserveProp from "./components/Properties/ReserveProp"
import CancelProp from './components/Customer/CancelProp'
import ReviewProp from './components/Customer/ReviewProp'
import RateOwner from './components/Customer/RateOwner'
import ViewPropRes from './components/Properties/ViewPropRes'
import OwnerRemProp from './components/Owner/OwnerRemProp'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
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
          <Route path="/ah/:id" element={<AdminHome/>}/>
          <Route path="/ch" element={<CustomerHome/>}/>
          <Route path="/apd" element={<AdminProcessDate/>}/>
          <Route path="/sf" element={<ScheduleFlight/>}/>
          <Route path="/ap" element={<AddProp/>}/>
          <Route path="/cac" element={<CreateAccountCust/>}/>
          <Route path="/cao" element={<CreateAccountOwner/>}/>
          <Route path="/vp" element={<ViewProp/>}/>
          <Route path="/rf" element={<RemoveFlights/>}/>
          <Route path="/cf" element={<CancelFlight/>}/>
          <Route path="/bf" element={<BookFlight/>}/>
          <Route path="/rp" element={<ReserveProp/>}/>
          <Route path="/ccp" element={<CancelProp/>}/>
          <Route path="/crp" element={<ReviewProp/>}/>
          <Route path="/cro" element={<RateOwner/>}/>
          <Route path="/vpr" element={<ViewPropRes/>}/>
          <Route path="/orp" element={<OwnerRemProp/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
