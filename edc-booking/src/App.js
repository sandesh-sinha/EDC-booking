import React from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Booking from './pages/Booking'

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/booking' component={Booking} />
        </Switch>
      </Router>
  );
}

export default App;
