import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography'
import './Home.css'
const styles = (theme) => ({
    ...theme.spreadThis, 
})
export class Home extends Component {
    imgUrl = require('../images/collegeLogo.png')
    heritage = require('../images/heritage.jpg')
    render() {
        return (
            <div className='container'>  
                <div className='collegeInfo'>
                    <img src={this.imgUrl} alt='img' className='collegeLogo' />
                    <div className='collegeName' >
                        <Typography variant='h3' color='primary'>IIT (ISM) Dhanbad</Typography>
                        <Typography variant='h4' color='primary'>Executive Development Center(EDC)</Typography>
                    </div>
                    <div className='extraDetails'>
                        <Link to='/login'><Typography variant='body1' color='primary'>Contacts</Typography></Link>
                        <Link to='login'>
                            <Typography variant='body1' color='primary'>About</Typography>
                        </Link>
                    </div>
                </div>
                <img className='heritage' src={this.heritage} alt='heritage' />
            </div>
        )
    }
}

export default withStyles(styles)(Home);