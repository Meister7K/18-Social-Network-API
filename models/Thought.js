const { Schema, model, Types } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thought_text: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 500,
    },
    username: {
      type: String,
      required: true,
      minLength: 1,
    },
    reactions: [reactionSchema],
    created_at: {
      type: Date,
      default: Date.now,
      get: timestamp => new Date(timestamp).toLocaleDateString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
