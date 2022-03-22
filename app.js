const express = require('express')
const path = require('path')

const router = require('./routes/route')
const app = express()

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended : true}))
app.set('view engine','ejs')

app.use(router)

app.listen(3000)