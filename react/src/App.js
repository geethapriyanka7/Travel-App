import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Test from './components/dashboard/Test'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route path="/a" element={<Test/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
