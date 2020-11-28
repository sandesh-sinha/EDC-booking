import React, { useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Login.css'
import {db, auth} from '../firebase';
import { useStateValue } from '../StateProvider';

function Login() {
    const admin_email = "admin@iitism.ac.in"
    const admin_password = "admin@123"
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [{}, dispatch] = useStateValue();
    const signIn = (event) => {
        event.preventDefault();
        if(email===admin_email && password===admin_password){
                auth.signInWithEmailAndPassword(email, password)
                .then( () => {
                    dispatch({
                        type : 'SET_ADMIN'
                    })
                    history.push('/');
                })
                .catch( (error) => {
                    alert(error.message);
                })
        }
        else{
            alert("Not admin");
        }
        
    }
    return (
    <Grid container className='form'>
        <Grid item sm />
        <Grid item>
            <div className='collegeLogo'>
                <img className='img' src={require('../images/collegeLogo.png')} alt='monkey'/>  
            </div>    
            <Typography variant='h2' className='pageTitle'>
                Admin Login
            </Typography>
            <form noValidate > 
                <TextField  id='email'
                            name='email'
                            type='email' 
                            label='Email' 
                            value ={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='fields'
                            fullWidth/>
                <TextField  id='password' 
                            name='password' 
                            type='password' 
                            label='Password'
                            value ={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className='fields'
                            fullWidth/>
                <Button type='submit' 
                        variant='contained' 
                        className='fields'
                        color='primary'
                        onClick={signIn}> <div>Login</div>
                </Button>
            </form>
        </Grid>
        <Grid item sm />
    </Grid>
    )
    
}
export default Login;
