const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/foodBlog')

const categoryColumn = {
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
}

const CategorySchema = new mongoose.Schema(categoryColumn)



module.exports = mongoose.model('Category',CategorySchema)