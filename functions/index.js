// require('dotenv').config();
const firebase = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
const firebaseConfig = {
    apiKey: "AIzaSyDqpzIwbmLYQl9TiJPMgMUD_byZMa1MSFM",
    authDomain: "edcapp-ceca9.firebaseapp.com",
    databaseURL: "https://edcapp-ceca9.firebaseio.com",
    projectId: "edcapp-ceca9",
    storageBucket: "edcapp-ceca9.appspot.com",
    messagingSenderId: "747415966325",
    appId: "1:747415966325:web:c58a4bc9d6aaf109bb1e3c",
    measurementId: "G-NF967T72TT"
  };
const firebaseApp = firebase.initializeApp();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


// Middlewares
app.use(cors());
app.use(express.json());

app.post('/book' , (req,res)=>{
    console.log(req.body);
    const data = {
        name : req.body.name,
        checkin : req.body.checkIn,
        checkout : req.body.checkout,
        guest : req.body.guest,
        roomtype : req.body.roomtype,
        email : req.body.email
    };
    // console.log(data);
    db.collection('booking')
    .add(data)
    .then( (doc) => {
        const newdata = data;
        newdata.id = doc.id;
        return res.json(newdata);
    })
    .catch( (err) =>{
        console.log(err);
    })
})

app.post('/history', (req,res) =>{
    console.log(req.body);
    db.collection('booking')
    .where('email', '==', req.body.email)
    .get()
    .then( (data)=>{
        let booking = [];
        data.forEach((doc)=>{
            booking.push({
                id : doc.id,
                name : doc.data().name,
                checkin : doc.data().checkin,
                checkout : doc.data().checkout,
                guest : doc.data().guest,
                roomtype : doc.data().roomtype,
                email : doc.data().email
            })
        })
        return res.json(booking);
    })
    .catch(err => {
        console.log(err);
    })
});

exports.api = functions.https.onRequest(app);

