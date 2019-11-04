const Joi = require('joi');
const express = require('express');
const app = express();

//used to receive .json files
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

app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

//Post message for client to POST courses in array
app.post('/api/courses', (req, res) => {
    const result = validateCourse(req.body)
    if(result.error){
        res.status(400).send(result.error);
        return;
   }

    const course  = {//creates course Object after validation
        id: courses.length + 1,
        //id: req.body.id,
        name: req.body.name,
        badge: req.body.badge
   };
   res.write("Course aded!");
   courses.push(course); //push course into array
   res.send(course);
});

 app.put('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID does not exist');// 404
    
    const result = validateCourse(req.body);
    if(result.error){
        res.status(400).send(result.error);
        return;
        }
    course.name = req.body.name;
    res.send(course);
});

 function validateCourse(course){
    const schema = {//schema to only allow specific input
        name: Joi.string().min(5).required(),
        badge: Joi.string().min(8).required()
    }; 

    return Joi.validate(course, schema);
 }
app.get('/api/courses/:id', (req, res) =>{
const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) res.status(404).send('The course with the given ID does not exist');// 404
res.send(course);
});


//PORT 
const port = process.env.PORT || 3000;
app.listen(port, () =>(console.log(`Listening on port ${port}....`)));