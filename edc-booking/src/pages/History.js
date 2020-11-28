import React, {useState, useEffect, Fragment} from 'react'
import {Typography} from '@material-ui/core'
import { useStateValue } from '../StateProvider'
import axios from '../axios';
import Userdata from '../component/Userdata'
function History() {
    const [{user}, dispatch] = useStateValue();
    const [userData, setuserData] = useState([])
    useEffect(() => {
        if(user){
            const data = {"email": user.email}
            axios.post('/history', {
                email : user.email
            })
            .then( (booking) => {
                const newuserdata = []
                booking.data.map( (b) =>{
                    newuserdata.push(b);
                })
                setuserData(newuserdata);
            })
            .catch( err=> console.log(err));
        }
    }, [])
    return (
        <div className='container' >
            {user &&
                <div>
                    <Typography variant='h3'>Booked rooms {userData?.length}</Typography>
                    { userData.map((data) =>{
                        return <Userdata data={data} id={data.id}/>
                    })}     
                </div>
            }
        </div>
    )
}

export default History
