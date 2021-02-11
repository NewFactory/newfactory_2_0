const {Router} = require('express')
const router = Router()
const Message = require('../models/Message')
const {check, validationResult} = require ('express-validator')

router.post('/contact', [check('email', 'Wrong email').isEmail()],
    async (req, res) => {
    try {
        console.log('Body:', req.body)
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Wrong data'
            })
        }
        const {name, email, text} = req.body
        const message = new Message({name, email, text})
        await message.save()
        res.status(201).json({message: 'Message created'})
    } catch (e) {
        res.status(500).json({ message: 'Что-то не так'})
    }
})

module.exports = router