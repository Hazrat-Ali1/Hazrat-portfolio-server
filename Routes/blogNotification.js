const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const notificationSChema = require('../Schemas/notificationSchema')
const Notification = new mongoose.model('Notification', notificationSChema)

router.get('/', (req, res) => {
    Notification.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem On Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})
router.get('/:id', (req, res) => {
    Notification.findOne({ '_id': req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})

router.post('/', (req, res) => {
    const newNotification = new Notification(req.body)
    newNotification.save((err ) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "There is A Problem on Server"  })
        }
        else {
            res.status(200).json({ message: "data inserted success" })
        }
    })
})


router.delete('/:id', (req, res) => {
    Notification.deleteOne({ '_id': req.params.id }, (err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json({ message: "data deleted" })
        }
    })
})

module.exports = router