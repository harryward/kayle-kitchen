Template.itemLanding.helpers({
    'recipe':function(){
        return Recipes.find({'_id':Session.get('theParam').id}).fetch()
    },
    'menuItems':function(){
        return menuItems.find({'recipe':Session.get('theParam').id},{sort:{'date':-1}}).fetch()
    },
    'price':function(){
        return numeral(this.price).format('$00.00')
    },
    'dollar':function(pr){
        return numeral(pr).format('$00.00')
    },
    'insights':function(){
        return menuInsights.findOne(Session.get('theParam').id)
    },
    'date':function(){
        return moment(this.date).format('MM/DD/YYYY')
    },
    'sellRate':function(){
        console.log(this.quantity/this.originalQty)
        return numeral(this.quantity/this.originalQty).format('0%')
    },
    'aboveZero':function(){
        if(this.originalQty > 0){
            return true
        }
    },
    'percenter': function () {
        return numeral(menuInsights.findOne(Session.get('theParam').id).percent).format('00%')
    },
    'image':function(){
        if(this.imageTwo){
        return Images.findOne(this.imageTwo).url()
        }
    },
    'cost':function(){
        return numeral(this.cost).format('$00.00')
    }
});

Template.itemLanding.events({
    'click .deleteRecipe':function(event,template){
        if(confirm('are you sure?')){
            Recipes.remove(this._id)
            alert('deleted')
            FlowRouter.go('/recipes')
        }
    }
});

Template.itemLanding.onCreated(function () {


    Tracker.autorun(function(){
        if(Recipes.findOne(Session.get('theParam').id)){
            //Meteor.subscribe('singleRecipe',Session.get('theParam').id);
            Meteor.subscribe('singleRecipeMenu',Session.get('theParam').id);
            Meteor.subscribe('singlePhoto',Recipes.findOne(Session.get('theParam').id).imageTwo)
        }
    })
});

Template.itemLanding.onRendered(function () {


});

Template.itemLanding.onDestroyed(function () {
    //add your statement here
});

