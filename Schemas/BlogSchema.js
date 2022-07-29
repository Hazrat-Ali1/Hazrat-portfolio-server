const { Schema } = require('mongoose')
const dateNow = require('../dateNow')()

const portfolioSchema = new Schema({
    title: {
        type: Object,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        default: dateNow
    },
    date: {
        type: String,
        default: dateNow

    }
})

module.exports = portfolioSchema