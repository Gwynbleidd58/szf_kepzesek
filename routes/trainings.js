const router = require('express').Router()

router.get('/api/trainings', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all trainings ' })
})

router.get('/api/trainings/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Get training ${req.params.id}` })
})

router.post('/api/trainings', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new training' })
})

router.put('/api/trainings/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update training ${req.params.id}` })
})

router.delete('/api/trainings/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete training ${req.params.id}` })
})

module.exports = router