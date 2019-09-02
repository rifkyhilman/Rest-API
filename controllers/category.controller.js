const model = require('../models')

const addCategory = (req,res) => {
    const name = req.body.name

    model.category.create({
        name,
    })
    .then( (berhasil) => {
        res.status(201).json({
            pesan: 'success',
            data: berhasil
        })    })
    .catch( (error) => {
        res.send(error)
    })
}

const getAllCategory = (req,res) => {
    model.category.findAll()
    .then( (berhasil) => {
        res.status(200).json({
            pesan: 'success',
            data: berhasil
        })
    })
    .catch( (error) => {
        res.send(error)
    })
}

const getByIdCategory = (req,res) => {
    model.category.findAll({
        where: {
            id: req.params.id
        }
    })
    .then( (berhasil) => {
        res.status(200).json({
            pesan: 'success',
            data: berhasil
        })
    })
    .catch( (error) => {
        res.send(error)
    })
}

const deletByIdCategory = (req,res) => {
    model.category.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( (berhasil) => {
        res.status(200).json({
            pesan: 'success',
            data: berhasil
        })
    })
    .catch( (error) => {
        res.send(error)
    })
}

const updateByIdCategory = (req,res) => {
    model.category.update({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },{
        where: {
            id: req.params.id
        }
    })
    .then( (berhasil) => {
        res.status(200).json({
            pesan: 'success',
            data: berhasil
        })
    })
    .catch( (error) => {
        res.send(error)
    })
}


module.exports = {
    addCategory,
    getAllCategory,
    getByIdCategory,
    deletByIdCategory,
    updateByIdCategory
}