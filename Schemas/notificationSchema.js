const { Schema } = require('mongoose')
const dateNow = require('../dateNow')()

const notificationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: dateNow
    }
})

module.exports = notificationSchema