const express = require("express")
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/',require('./routes'))

app.listen(2000, (req,res) => {
    console.log('listening on http://localhost2000')
})