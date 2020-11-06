import React from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import './App.css';
import Navbar from './component/Navbar';

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Booking from './pages/Booking'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#d50000',
    },
  },
  spreadThis : {
    Typography :{
      color : '#1e88e5'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/booking' component={Booking} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
