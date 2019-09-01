const model = require('../models')

const addUser = (req,res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    model.User.create({
        name,
        email,
        password
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

const getAllUser = (req,res) => {
    model.User.findAll()
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

const getByIdUser = (req,res) => {
    model.User.findAll({
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

const deletByIdUser = (req,res) => {
    model.User.destroy({
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

const updateByIdUser = (req,res) => {
    model.User.update({
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
    addUser,
    getAllUser,
    getByIdUser,
    deletByIdUser,
    updateByIdUser
}