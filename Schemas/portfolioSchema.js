const { Schema } = require('mongoose')
const dateNow = require('../dateNow')()

const portfolioSchema = new Schema({
    user:{
        type: Object,
        required: true
    },
    details: {
        type: Object,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    links: {
        type: Object,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: dateNow
    }
})

module.exports = portfolioSchema