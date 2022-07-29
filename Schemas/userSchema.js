const { Schema } = require('mongoose')
const dateNow = require('../dateNow')()

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    photoURL: {
        type: String,
       default: 'https://png.pngitem.com/pimgs/s/52-526033_unknown-person-icon-png-transparent-png.png'
    },
    role: {
        type: String,
        default: "am-public"
    },
    date: {
        type: String,
        default: Date.now
    }
})

module.exports = userSchema