const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const WorkspaceSchema = new Schema({
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
  },
  user: {
    type: String,
    required: true
  },
  namespace: {
    type: String,
    required: true
  },
  passwd: {
    type: String,
    required: true
  }
});
module.exports = Workspace = mongoose.model("workspace", WorkspaceSchema)

