const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const CourseSchema = new Schema({
    courseName: {
    type: String,
    required: true
  },
  courseID: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  expireDate: {
    type: Date, default: Date.now
  },
  owner: {
    type: String
  }
});
module.exports = Course = mongoose.model("courses", CourseSchema)

