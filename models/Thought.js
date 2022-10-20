const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String, 
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model('course', courseSchema);

module.exports = thoughtSchema;
