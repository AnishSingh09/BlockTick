const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.connect("mongodb://localhost:27017/BlocTik")
.then(()=>{console.log("The local database has started")})
.catch((err)=>{console.log(err)});

const PORT = 5000;
const app = express();
app.use(morgan('tiny'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({success : true,data : {}});
});

const customersRouter = require('./routes/customers');
app.use('/customers',customersRouter);

const eventsRouter = require('./routes/events'); 
app.use('/events',eventsRouter);

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});