//enable firebase to use funnctions from api
const functions = require('firebase-functions');
//enable schemas for validation
const Joi = require('joi');
const cors =  require("cors");
//server
const express = require('express');
const app = express();

app.use(cors({ origin: true }));

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

    const result = validateCourse(req.body);   
    if(result.error){
      res.status(400).send(result.error);
      return;
    }
    else{
      const course  = {//creates course Object after validation
      id: courses.length + 1,
      name: req.body.name,
      badge: req.body.badge
    }
    courses.push(course);
  }
    res.send(courses);

});

function validateCourse(course){
  const schema = {//schema to only allow specific input
      name: Joi.string().min(5).required(),
      badge: Joi.string().min(8).required()
  }; 

  return Joi.validate(course, schema);
}
  


//export api function
exports.app = functions.https.onRequest(app);
