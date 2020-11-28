import React , {Fragment, useState, useEffect} from 'react'
import './Booking.css'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { FormControlLabel, RadioGroup, Radio, FormControl, Button, FormLabel} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import {useStateValue} from '../StateProvider';
import axios from '../axios';

function Booking() {
    const [name, setname] = useState("")
    const [checkIn, setcheckIn] = useState("")
    const [guest, setguest] = useState("");
    const [checkout, setcheckout] = useState("")
    const [roomtype, setroomtype] = useState("")
    const history = useHistory();
    const [{user}, dispatch] = useStateValue();
    const bookroom = (event) =>{
        event.preventDefault();
        const data = {
            name,
            checkIn, 
            guest,
            checkout,
            roomtype,
            email : user.email,
            status : "pending"
        }
        axios.post('/book', data)
        .then((res)=>{
            history.push('/history');
            console.log(res);
        })
        .catch( err=> console.log(err))
    }
    useEffect(() => {
        if(!user){
            history.push('/');
        }
    }, [])
    return (
        <div className='booking'>
            <Typography variant='h3' color='primary'>Welcome to Room Booking in EDC</Typography>
                <div className='formdiv'>
                    <form className='form'>
                        <TextField  id='name'
                                    name='name'
                                    type='text' 
                                    label='name' 
                                    value ={name} 
                                    onChange={(e) => setname(e.target.value)} 
                                    className='fields'
                                    fullWidth/>
                        <div>Check In date</div>            
                        <TextField  id='check-in-date'
                                    name='check-in-date'
                                    type='date' 
                                    value ={checkIn} 
                                    onChange={(e) => setcheckIn(e.target.value)} 
                                    className='fields'
                                    fullWidth/>
                        <div>Check Out date</div>            
                        <TextField  id='check-out-date'
                                    name='check-out-date'
                                    type='date' 
                                    value ={checkout} 
                                    onChange={(e) => setcheckout(e.target.value)} 
                                    className='fields'
                                    fullWidth/>
                        <TextField  id='guest'
                                    name='guest'
                                    type='number' 
                                    label='number of guest' 
                                    value ={guest} 
                                    onChange={(e) => setguest(e.target.value)} 
                                    className='fields'
                                    fullWidth/>
                        <div>
                            <FormControl component="fieldset">
                                <FormLabel component="legend" className='fields'>Type of Room</FormLabel>
                                <RadioGroup aria-label="room" name="room" value={roomtype} onChange={(e)=> setroomtype(e.target.value)}>
                                    <FormControlLabel value="normal" control={<Radio />} label="normal (Rs-1000 per day)" />
                                    <FormControlLabel value="suite" control={<Radio />} label="suite (Rs-5000 per day)" />
                                </RadioGroup>
                            </FormControl> 
                        </div>  
                        
                        <div>
                        <Button type='submit' 
                            variant='contained' 
                            className='fields'
                            color='primary'
                            onClick={bookroom}> <div>Confirm Booking</div>
                        </Button>   
                        </div>       
                    </form>
            </div>
        </div>
        
    )
}
export default Booking;
