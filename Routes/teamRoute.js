const express = require('express')
const mongoose = require('mongoose')
const dateNow = require('../dateNow')
const router = express.Router()
const teamSchema = new mongoose.Schema({
    user: {
        type: Object,
        required: true
    },
    date: {
        type: String,
        default: dateNow()
    }
})
const Team = new mongoose.model('TeamMember', teamSchema)

router.get('/', (req, res) => {
    Team.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem On Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})
router.get('/:id', (req, res) => {
    Team.findOne({ '_id': req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})

router.post('/', (req, res) => {
    const newMessage = new Team(req.body)

    newMessage.save((err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server", err })
        }
        else {
            res.status(200).json({ message: "data inserted success" })
        }
    })
})


router.delete('/:id', (req, res) => {
    Team.deleteOne({ '_id': req.params.id }, (err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json({ message: "data deleted" })
        }
    })
})

module.exports = router