const mongoose = require('mongoose')
const Recipe = require('../models/recipe')


mongoose.connect('mongodb://localhost:27017/foodBlog')


const data = [
    { 
        "name": "Recipe Name Goes Here",
        "description": `Recipe Description Goes Here`,
        "email": "recipeemail@raddy.co.uk",
        "ingredients": [
            "1 level teaspoon baking powder",
            "1 level teaspoon cayenne pepper",
            "1 level teaspoon hot smoked paprika",
        ],
        "category": "American", 
        "image": "southern-friend-chicken.jpg"
    },
    { 
        "name": "Recipe Name Goes Here",
        "description": `Recipe Description Goes Here`,
        "email": "recipeemail@raddy.co.uk",
        "ingredients": [
            "1 level teaspoon baking powder",
            "1 level teaspoon cayenne pepper",
            "1 level teaspoon hot smoked paprika",
        ],
        "category": "American", 
        "image": "southern-friend-chicken.jpg"
    },
]

function addDummyData(){
    data.forEach(async(item)=>{
        const recipe = new Recipe(item)
        await recipe.save()
    })
    console.log('done')
}

addDummyData()