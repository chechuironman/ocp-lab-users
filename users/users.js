const config = require('../config/keys');
const Course = require('../models/courses');

class Courses {


 listCourses (req,res) {
    Course.find({},(err,courses)=>{
        res.send(courses);
    })
    }
createUser (req,res) {
        Course.find({},(err,courses)=>{
            console.log(courses);
            res.send(courses);
        })
        }

}
module.exports = Courses
// export let courses = new Courses()