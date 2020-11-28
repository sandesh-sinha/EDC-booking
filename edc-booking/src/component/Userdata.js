import React from 'react'
import './Userdata.css'
function Userdata( props) {
    console.log(props.data);
    return (
        <div className='userdata'>
            <div> Name : {props.data.name}</div>
            <div> Checkin Date : {props.data.checkin}</div>
            <div> Checkout Date : {props.data.checkout}</div>
            <div> guest number : {props.data.guest}</div>
            <div> roomtype : {props.data.roomtype}</div>
            <div> status : pending</div>
        </div> 
    )
}

export default Userdata
 