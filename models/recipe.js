const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/foodBlog')

const recipeColumn = {
    name: {
        type: String,
        required: 'This field is required.'
    },
    description: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    ingredients: {
        type: Array,
        required: 'This field is required.'
    },
    category: {
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
        required: 'This field is required.'
    },
    image: {
        type: String,
        required: 'This field is required.'
    },
}

const RecipeSchema = new mongoose.Schema(recipeColumn)



module.exports = mongoose.model('Recipe',RecipeSchema)