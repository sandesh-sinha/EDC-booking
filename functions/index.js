require('dotenv').config();
// const functions = require('firebase-functions');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors({origin : true}));
app.use(morgan('tiny'));
app.use(express.json());










app.listen(port, () => {
    console.log(`server is running on ${port}`);
})



