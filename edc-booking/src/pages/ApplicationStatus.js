import React, {useEffect, useState} from 'react'
import './ApplicationStatus.css'
import axios from '../axios'
import Application from '../component/Application';
import Typography from '@material-ui/core/Typography'
function ApplicationStatus() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.post('/getpending')
        .then((res)=>{
            const newuserdata = []
            res.data.map( (b) =>{
                newuserdata.push(b);
            })
            setdata(newuserdata);
        })
        .catch(err=>{ console.log(err)});

    }, [])  
    return (
        <div className='container'>
            <Typography variant='h3'>
                Pending Application
            </Typography>
            {data.map( (application => {
                return (
                    <Application data={application} key={application.id}/>
                )
            }))}
        </div>
    )
}

export default ApplicationStatus
