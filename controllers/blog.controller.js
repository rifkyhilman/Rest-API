const model = require('../models')


const home = (req,res) => {
    res.send('hello world')
}

const about = (req,res) => {
    res.send('ini Aboute')
}

const addBlog = (req,res) => {
    const title = req.body.title
    const body = req.body.body

    model.Blog.create({
        title,
        body
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

const getAllblogs = (req,res) => {
    model.Blog.findAll()
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

const getById = (req,res) => {
    model.Blog.findAll({
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

const deletById = (req,res) => {
    model.Blog.destroy({
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

const updateById = (req,res) => {
    model.Blog.update({
            title: req.body.title,
            body: req.body.body
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
    home,
    about,
    addBlog,
    getAllblogs,
    getById,
    deletById,
    updateById
}