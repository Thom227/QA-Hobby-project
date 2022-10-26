const router = require('express').Router();
const {footballModel} = require('./database')

router.get('/football', (req, res) => res.send('Test'));

router.get('/getAll', (req, res) => footballModal.find({}).then(results => res.send(results)).catch(err => next(err)));

router.post('/createPlayer', async (req, res, next) => {
    try{
        const newPlayer = await footballModel.create(req.body);
        return res.status(201).json(newPlayer);
    } catch (err) {
        return next(err);
    }
});

router.patch('/replace/:id', async (req, res, next) => {
    try {
        await footballModel.findByIdAndUpdate(req.params.id, req.query)
        const newName = await footballModel.findById(req.params.id);
        res.send(newName);
    } catch (err) {
        return next (err);
    }
});

router.delete('/delete/:id', (req, res, next) => {
    const {id} = req.params;
    console.log('ID', id);
    footballModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});

module.exports = router;