const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Összes képzés' })
})

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `A ${req.params.id} id-val rendelkező képzés` })
})

router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Új képzés létrehozása' })
})

router.put('/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `Update training ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `Delete training ${req.params.id}` })
})

module.exports = router