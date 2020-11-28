import React, {Component, Fragment} from "react"
import {Link} from 'react-router-dom'
// MUI imports
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import './Navbar.css'
import {useStateValue} from '../StateProvider'
import { auth } from '../firebase';

function Navbar(){
  const [{user, admin} , dispatch] = useStateValue();
  const handleAuthentication = () => {
      console.log("signout");
      if(user){
          auth.signOut();
          dispatch({
            type : 'SET_ADMIN_FALSE'
          })
      }
  }
    return (
      <AppBar>
          <Toolbar>
              <div className="nav-container">
                <Button onClick={handleAuthentication} color='inherit' component={Link} to="/login">{user ? 'Signout': 'Login'}</Button>
                  <Button color='inherit' component={Link} to="/">Home</Button>
                  {user && <Button color='inherit' component={Link} to='/book'>Book Room</Button>}
                  {user && <Button color='inherit' component={Link} to='/history'>Bookings</Button>}
                  {admin && <Button color='inherit' component={Link} to='applicationstatus'>ApplicationStatus</Button> }
                </div>
          </Toolbar>
      </AppBar>  
    );
    
};

export default Navbar;