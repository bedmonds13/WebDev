

//const joi = require('@hapi/joi');
//server
const express = require('express');
const app = express();

//enable firebase to use funnctions from api
const firebaseFunctions = require('firebase-functions');
const admin = require('firebase-admin');

//middlerware
const cors = require('cors')({origin: true});
app.use(cors);

admin.initializeApp();

const courses = [//array of courses
    {id: 1, name: 'course1', badge: '005275435'},
    {id: 2, name: 'course2', badge: '008648342'},
    {id: 3, name: 'course3', badge: '004853264'},
    
];
app.get("/", (req, res) => {
    res.send("This is the api index");
});

app.get("/courses", (req, res) => {
    res.send(courses);
});


app.post("/courses", (req, res) => {
      const course  = {//creates course Object after validation
      id: courses.length + 1,
      name: req.body.name,
      badge: req.body.badge
      }
    courses.push(course);

    res.send(courses);

});

exports.widgets = firebaseFunctions.https.onRequest(app);