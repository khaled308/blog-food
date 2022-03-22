const Category = require('../models/category')
const Recipe = require('../models/recipe')
class Controoler{
    async index(req,res){
        const categories = await Category.find({}).limit(5)
        const latestRecipes = await Recipe.find({}).sort({_id: -1}).limit(5)
        res.render('index',{title : 'Home page',categories,latestRecipes})
    }

    async getAllCategories(req,res){
        const allCategories = await Category.find({})
        res.render('categories',{title : 'Home page',allCategories})
    }

}

module.exports = Controoler