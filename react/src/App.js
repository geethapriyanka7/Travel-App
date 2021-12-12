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
import Mainlogin from './components/Login/MainLogin'
import AdminHome from './components/Admin/AdminHome'

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
          <Route path="/vf" element={<ViewFlights/>}/>
          <Route path="/oh" element={<OwnerHome/>}/>
          <Route path="/do" element={<DeleteOwner/>}/>
          <Route path="/l" element={<Mainlogin/>}/>
          <Route path="/ah" element={<AdminHome/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
