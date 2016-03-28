Template.recipes.helpers({
    'rec':function(){
        if(Session.get('recipeQuery')){
            return Recipes.find({'imageTwo':{$exists:true},'title':{$regex:Session.get('recipeQuery'),$options:'i'}},{'sort':{'type':-1,'title':1}}).fetch()
        }else{
            return Recipes.find({'imageTwo':{$exists:true}},{'sort':{'type':-1,'title':1}}).fetch()
        }

    },
    'recQuery':function(){
        return Session.get('recipeQuery')
    },
    'photo':function(){
        if(this.imageTwo){
            return Images.findOne(this.imageTwo).url();
        }else{
            return 'http://placehold.it/200x200&t=Needs+Photo'
        }
    }
});

Template.recipes.events({
    'keyup .search':function(event,template){
        var theVal = event.target.value
        console.info(theVal);
        Session.set('recipeQuery',theVal)
    }
});

Template.recipes.onCreated(function () {
    Meteor.subscribe('recipes');
    Meteor.subscribe('images');
});

Template.recipes.onRendered(function () {

});

Template.recipes.onDestroyed(function () {
    //add your statement here
});

