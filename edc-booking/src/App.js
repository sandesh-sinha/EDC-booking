import React ,{useEffect} from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Booking from './pages/Booking'
import History from './pages/History'
import AdminLogin from './pages/AdminLogin'
import ApplicationStatus from './pages/ApplicationStatus'
function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user : authUser,
        })
        if(authUser.email==="admin@iitism.ac.in"){
          dispatch({
            type : 'SET_ADMIN'
          })
        }
      }
      else{
        dispatch({
          type: 'SET_USER',
          user : null
        })
      }
    })
  }, [])
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/applicationstatus' component={ApplicationStatus} />
          <Route exact path='/adminlogin' component={AdminLogin} />
          <Route exact path='/book' component={Booking} />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/history' component={History}/>
        </Switch>
      </Router>
  );
}

export default App;
