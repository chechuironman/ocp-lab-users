// import { Courses } from '../../db/course_db.js';
// import { courses } from '../../db/course_db'
const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
let middleware = require('../../middleware');
const Courses = require('../../users/users.js');

var  newCourse = new Courses(); 

// router.post("/register_course", middleware.checkToken, newCourse.registerCourse)
router.get("/list_courses", newCourse.listCourses)
// router.get("/list_courses", middleware.checkToken, newCourse.listCourses)

module.exports = router;