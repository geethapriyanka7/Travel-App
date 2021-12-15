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
import Customer from './components/Login/Customer'
import Owner from './components/Login/Owner'
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
import RateCust from './components/Owner/RateCust'
import InputProp from './components/Properties/InputProp';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route path="/a" element={<Test/>}/>
          <Route path="/vc/:id" element={<ViewCust/>}/>
          <Route path="/vo/:id" element={<ViewOwn/>}/>
          <Route path="/val/:id" element={<ViewAirl/>}/>
          <Route path="/vap/:id" element={<ViewAp/>}/>
          <Route path="/vf" element={<ViewFlights/>}/>
          <Route path="/oh/:id" element={<OwnerHome/>}/>
          <Route path="/do/:id" element={<DeleteOwner/>}/>
          <Route path="/admins" element={<LogAd/>}/>
          <Route path="/customer" element={<Customer/>}/>
          <Route path="/owner" element={<Owner/>}/>
          <Route path="/ah/:id" element={<AdminHome/>}/>
          <Route path="/ch/:id" element={<CustomerHome/>}/>
          <Route path="inp/:id" element={<InputProp/>} />
          <Route path="/apd/:id" element={<AdminProcessDate/>}/>
          <Route path="/sf" element={<ScheduleFlight/>}/>
          <Route path="/ap/:id" element={<AddProp/>}/>
          <Route path="/cac" element={<CreateAccountCust/>}/>
          <Route path="/cao" element={<CreateAccountOwner/>}/>
          <Route path="/vp/:id" element={<ViewProp/>}/>
          <Route path="/rf" element={<RemoveFlights/>}/>
          <Route path="/cf/:id" element={<CancelFlight/>}/>
          <Route path="/bf/:id" element={<BookFlight/>}/>
          <Route path="/rp/:id" element={<ReserveProp/>}/>
          <Route path="/ccp/:id" element={<CancelProp/>}/>
          <Route path="/crp/:id" element={<ReviewProp/>}/>
          <Route path="/cro/:id" element={<RateOwner/>}/>
          <Route path="/vpr/:id" element={<ViewPropRes/>}/>
          <Route path="/orp/:id" element={<OwnerRemProp/>}/>
          <Route path="/orc/:id" element={<RateCust/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
