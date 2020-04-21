const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());


const courses = [//array of courses
    {id: 1, name: 'course1', badge: '005275435'},
    {id: 2, name: 'course2', badge: '008648342'},
    {id: 3, name: 'course3', badge: '004853264'},
    
];


//get pages that send short messages
app.get('/', (req,res)=> {
    res.send('Hello World!');
});

exports.api = functions.https.onRequest(app);
