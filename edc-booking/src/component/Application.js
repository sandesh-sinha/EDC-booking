import React , {useState} from 'react'
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import axios from '../axios';
function Application(props) {
    const history = useHistory();
    const [value, setvalue] = useState("pending")
    const handleAccept = (e) =>{
        e.preventDefault();
        setvalue(e.target.value);
        axios.post('/update', {
            id : props.data.id,
            value : "accepted"
        })
        .then( res=>{
            console.log("successful updated");
            history.push('/');
            history.push('/applicationstatus')
        })
        .catch( err=>{console.log(err)});
    }
    const handleReject = (e) =>{
        e.preventDefault();
        setvalue(e.target.value);
        axios.post('/update', {
            id : props.data.id,
            value : "rejected"
        })
        .then( res=>{
            console.log("successful updated");
            history.push('/');
            history.push('/applicationstatus');
        })
        .catch( err=>{console.log(err)});
    }
    return (
        <div>
            <div className='userdata'>
                <div> Name : {props.data.name}</div>
                <div> Checkin Date : {props.data.checkin}</div>
                <div> Checkout Date : {props.data.checkout}</div>
                <div> guest number : {props.data.guest}</div>
                <div> roomtype : {props.data.roomtype}</div>
                <div> status : {props.data.status} </div>
                <div>
                    <Button value="accept" color='primary' style={{ background: "lightgreen"}} onClick={handleAccept}>Accept</Button>
                    <Button value="reject" color='primary' style={{ background: "lightblue"}} onClick={handleReject}>Reject</Button>
                </div>
            </div> 
        </div>
    )
}

export default Application
