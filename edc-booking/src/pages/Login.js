import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Login.css'
const styles = (theme) => ({
    ...theme.spreadThis, 
})
export class Login extends Component {
    constructor(){
        super();
        this.state= {
            email : '', 
            password : '',
            loading :  false,
            errors : {}
        }
    };
    render() {
        return (
        <Grid container className='form'>
            <Grid item sm />
            <Grid item>
                <div className='collegeLogo'>
                    <img className='img' src={require('../images/collegeLogo.png')} alt='monkey'/>  
                </div>    
                <Typography variant='h2' className='pageTitle'>
                    Login
                </Typography>
                <form noValidate onSubmit={this.handleSubmit} className='fields'> 
                    <TextField  id='email'
                                name='email'
                                type='email' 
                                label='Email' 
                                value ={this.state.email} 
                                onChange={this.handleChange} 
                                className='fields'
                                fullWidth/>
                    <TextField  id='password' 
                                name='password' 
                                type='password' 
                                label='Password'
                                value ={this.state.password} 
                                onChange={this.handleChange} 
                                className='fields'
                                fullWidth/>
                    <Button type='submit' 
                            variant='contained' 
                            className='fields'
                            color='primary'> <div>Login</div>
                    </Button>
                    <div>
                        <Typography variant='body2'>Don't have an account ? <Link to='/signup'>Sign up </Link></Typography>
                    </div>
                </form>
            </Grid>
            <Grid item sm />
        </Grid>
        )
    }
}
export default withStyles(styles)(Login);
