Meteor.methods({
    'insertRecipe':function(recObj){
        return Recipes.insert(recObj)
    },
    'updateRecipe':function(recipeId,recipeObj){
        return Recipes.update({'_id':recipeId},{
            $set:recipeObj
        })
    },
})