const { Schema, model, Types } = require("mongoose");

const reactionSchema = new Schema(
    {
        reaction_id:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reaction_text:{
            Type: String,
            required: true,
            minLength: 1,
            maxLength: 300,
        },
       username: {
        type:String,
        required: true,
       },
       created_at:{
        type: Date,
        default: Date.now,
        get: timestamp => new Date(timestamp).toLocaleDateString(),
       },
    },
    {
        toJSON:{
            getters:true,
        },
        id: false,
    }
);
const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;