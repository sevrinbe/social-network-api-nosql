const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: () => new Types.ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLengt: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
