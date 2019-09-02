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
    const category_id = req.body.category_id

    model.Blog.create({
        title,
        body,
        category_id
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


const getByCategoryId = (req,res) => {
    model.Blog.findAll({
        where: {
            category_id: req.params.id_category
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
            body: req.body.body,
            category_id: req.body.category_id
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
    updateById,
    getByCategoryId
}