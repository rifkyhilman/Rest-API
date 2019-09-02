const router = require('express').Router()
const blogcontroller = require('./controllers/blog.controller')
const usercontroller = require('./controllers/user.controller')
const categorycontroller = require('./controllers/category.controller')

router.get('/', blogcontroller.home)
router.get('/about', blogcontroller.about)
router.post('/add-blog', blogcontroller.addBlog)
router.get('/get-all-blog', blogcontroller.getAllblogs)
router.get('/blogs/:id', blogcontroller.getById)
router.delete('/blogs/:id', blogcontroller.deletById)
router.patch('/blogs/:id', blogcontroller.updateById)
router.get('/blogs/category/:id_category', blogcontroller.getByCategoryId)

router.post('/add-user',usercontroller.addUser)
router.get('/get-all-user', usercontroller.getAllUser)
router.get('/user/:id', usercontroller.getByIdUser)
router.delete('/user/:id', usercontroller.deletByIdUser)
router.patch('/user/:id', usercontroller.updateByIdUser)

router.post('/add-category',categorycontroller.addCategory)
router.get('/get-all-category',categorycontroller.getAllCategory)
router.get('/category/:id', categorycontroller.getByIdCategory)
router.delete('/category/:id', categorycontroller.deletByIdCategory)
router.patch('/category/:id', categorycontroller.updateByIdCategory)

module.exports = router