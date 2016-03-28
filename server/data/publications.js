Meteor.publish("menu",function(){
    return menuItems.find({});
})

Meteor.publish("recipes",function(){
    return Recipes.find({});
})

Meteor.publish("singleRecipe",function(singleRec){
    return Recipes.find({'_id':singleRec});
})

Meteor.publish("images",function(singleImg){
    return Images.find()
})

Meteor.publish("singleImage",function(singleImg){
    return Images.find({'_id':singleImg});
})

Meteor.publish("singleRecipeMenu",function(singleRec){
    return menuItems.find({'recipe':singleRec});
})

Meteor.publish("singlePhoto",function(imageId){
    return Images.find({'_id':imageId});
})