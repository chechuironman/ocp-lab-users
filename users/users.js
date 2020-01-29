const config = require('../config/keys');
const Course = require('../models/courses');

class Courses {

    constructor(connection) {
        // this.projects = projects;
        // this.connection = mongoose.connect(config.mongoURI, { useNewUrlParser: true });
        
    }
 listCourses (req,res) {
    Course.find({},(err,courses)=>{
        console.log(courses);
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