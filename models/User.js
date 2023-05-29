const {Schema, model, Types} = require('mongoose');
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 1
        },
        email:{
            type: String,
            required: true,
            unique: true,
            validate:{
                function (v) {
                    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/.test(v);
                }
            }
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref:'Thought',
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
        created_at:{
            type: Date,
      default: Date.now,
      get: timestamp => new Date(timestamp).toLocaleDateString(),
        },
    },
    {
        toJson: {
            getters: true,
        },
        id: false,
    }
);

const User = model('User', userSchema);

module.exports = User;